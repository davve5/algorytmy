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

const N = 100
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
}

const half = Math.ceil(people.length / 2)
const A = people.slice(0, half)
const B = people.slice(-half)
// console.log(people)

console.log(countAbilityToWork(A))
console.log(countAbilityToWork([...A, B[0]]))

let k = 0;
while (k < B.length - 2) {
  const new_a = countAbilityToWork([...A, B[k]]);
  const a = countAbilityToWork(A);
  console.log(`a: ${a}   new_a: ${new_a}`)
  if (new_a > a) {
    A.push(B[k])
    B.splice(k, 1);
  } else {
    k++
  }
}
console.log(countAbilityToWork(A))
console.log(countAbilityToWork(B))


