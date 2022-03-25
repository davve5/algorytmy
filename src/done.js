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

const N = 10
const people = []
for (let i = 0; i < N; i++) {
  people.push(new Person(i))
}

people.forEach(person => person.generateWeights(people.filter(p => p.index !== person.index)))

const countAbilityToWork = (subset) => {
  const dict = {}
  let sum = 0
  const keys = subset.map(p => p.index)
  for (let i = 0; i < keys.length; i++) {
    const current = subset[i]
    for (key of Object.keys(current.weights).map(Number).filter(k => keys.includes(k) && k !== current.index)) {
      if (!dict[`${key}${current.index}`] && !dict[`${current.index}${key}`]) {
        sum += current.weights[`${key}`]
        // console.log(`${current.index}->${key} \t value: ${current.weights[`${key}`]} \t sum: ${sum}`)
        dict[`${key}${current.index}`] = true;
        dict[`${current.index}${key}`] = true;
      }
    }
  }
  // console.log('\n')
  return sum
}

function* subsets(array, offset = 0) {
  while (offset < array.length) {
    let first = array[offset++]
    for (let subset of subsets(array, offset)) {
      subset.push(first)
      yield subset
    }
  }
  yield []
}


const X = []
let k = 0
for (let a of subsets(people)) {
  if (a.length < 2 || a.length > N - 2) {
    continue;
  }
  k++

  const b = [...people].filter(el => !a.includes(el))
  X.push([a, b])
}

const best = {
  sets: [],
  coowork: [],
  total: -Infinity
}

const totals = []

for (let i = 0; i < X.length; i++) {
  const [a, b] = X[i]
  const _a = countAbilityToWork(a)
  const _b = countAbilityToWork(b)
  const total = _a + _b
  totals.push(total)
  // break;

  if (total > best.total) {
    best.sets = [a, b]
    best.coowork = [_a, _b]
    best.total = total
  }
}

console.log(best.sets[0])
console.log(best.sets[1])
console.log(best)
