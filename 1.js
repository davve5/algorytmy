class Person {
  constructor(index, N) {
    this.index = index;
    this.weights = {}
  }

  generateWeights(people) {
    const WEIGHTS = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

    people.forEach(p => {
      const weight = WEIGHTS[Math.floor(Math.random() * WEIGHTS.length)];
      if (p.index === this.index) {
        return;
      } else if (p.weights[this.index]) {
        this.weights[p.index] = p.weights[this.index]
      } else if (this.weights[p.index]) {
        p.weights[this.index] = this.weights[p.index]
      } else {
        this.weights[p.index] = weight
        p.weights[this.index] = weight
      }
    })
  }

  addWeights(weights) {
    this.weights = weights
  }
}

const N = 6
const people = []
for (let i = 0; i < N; i++) {
  people.push(new Person(i))
}

people.forEach(person => person.generateWeights(people.filter(p => p.index !== person.index)))

const countAbilityToWork = (subset) => {
  let sum = 0
  for (let i = 0; i < subset.length; i++) {
    const el = subset[i];
    for (let j = i + 1; j < subset.length; j++) {
      sum += el.weights[j]
    }
  }
  return sum
  // return subset.reduce((sum, person, index, people) => {
  //   const people_without_current = people.filter(p => p.index !== person.index)
  //   return sum + people_without_current.reduce((acc, p) => acc + p.weights[index], 0)
  // }, 0)
}

const half = Math.ceil(people.length / 2)
const A = people.slice(0, half)
const B = people.slice(-half)
// console.log(people)
console.log(A)
console.log(countAbilityToWork(A))
// console.log(B)


