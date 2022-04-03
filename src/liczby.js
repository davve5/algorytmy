/**
 * Podziel liczmy M na wszystkie mozliwe podzialy liczb nieparzystych
 * Podziel liczmy M na wszystkie mozliwe podzialy liczb bez powtorzen
 * policzyc wszystkie mozliwosci
 */

/**
 * 5 = 5
 * 5 = 3 + 1 + 1
 * 5 = 1 + 1 + 1 + 1
 */

let N = 20

let K = []
function findCombinationsUtil(arr, index, num, reducedNum, stepSize = 2) {
  if (reducedNum < 0)
    return;

  if (reducedNum == 0) {
    const numbers = []
    for (let i = 0; i < index; i++) {
      numbers.push(arr[i])
    }
    K.push(numbers)
    return;
  }

  const prev = (index == 0) ? 1 : arr[index - 1];

  for (let k = prev; k <= num; k += 2) {
    arr[index] = k;

    findCombinationsUtil(arr, index + 1, num, reducedNum - k, stepSize);
  }
}

const findCombinations = (n, stepSize) => {
  let arr = [];

  findCombinationsUtil(arr, 0, n, n, stepSize);
}

K = []
findCombinations(N)
console.log(K)
console.log(`z powtorzeniami: ${K.length}`)

console.log('\n\n')

function* subsets(values, sum, parts = []) {
  var i, s;

  for (i = 0; i < values.length; i++) {
    s = sum - values[i];
    if (!s) {
      yield [...parts, values[i]];
    } else if (s > 0) {
      yield* subsets(values.slice(i + 1), s, [...parts, values[i]]);
    }
  }
}

const A = []
for (let i = 1; i <= N; i++) {
  A.push(i)
}

const solution = [...subsets(A, N)];
console.log(solution)
console.log(`Bez powtorzen ${N}: ${solution.length}`)
