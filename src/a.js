class Person {
  constructor(index) {
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
  const keys = []
  let sum = 0
  for (let i = 0; i < subset.length; i++) {
    const element = subset[i];
    for (key in element.weights) {
      if (keys.includes(key)) {
        continue;
      } else {
        keys.push(key)
      }
      sum += element.weights[key]
    }
    // for (let j = i + 1; j < subset.length; j++) {
    //   sum += el.weights[j]
    //   console.log(el)
    // }
  }
  return sum
}

const half = Math.ceil(people.length / 2)
const A = people.slice(0, half)
const B = people.slice(-half)


// console.log(A)
// console.log(B)
console.log('-------------- START -------------')

let k = 0;
while (k < N) {
  // if (A.length === 1 || B.length === 1) {
  //   break;
  // }

  const a = countAbilityToWork(A);
  const b = countAbilityToWork(B);
  let new_a = a
  let new_b = b

  if (B[k]) {
    new_a = countAbilityToWork([...A, B[k]]);
  }

  if (A[k]) {
    new_b = countAbilityToWork([...B, A[k]]);
  }
  
  const diff_a = new_a - a;
  const diff_b = new_b - b;
  console.log(k)
  console.log(`a: ${a}   new_a: ${new_a}`)
  console.log(`b: ${b}   new_b: ${new_b}`)
  console.log(`diff_a: ${diff_a}   diff_b: ${diff_b}`)

  if (diff_a > diff_b) {
    if (new_a > a) {
      A.push(B[k])
      B.splice(k, 1);
    }
  } else if (diff_a < diff_b) {
    if (new_b > b) {
      B.push(A[k])
      A.splice(k, 1);
    }
  } else {
    k++
  }
}
// console.log(A)
// console.log(A.length)
// conssole.log(countAbilityToWork(A))
// console.log(B)
// console.log(B.length)
// console.log(countAbilityToWork(B))


