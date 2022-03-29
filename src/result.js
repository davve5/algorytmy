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
c
let K = []
let N = 20
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
// console.log(K)
console.log(`z powtorzeniami: ${K.length}`)

// const fib = (num) => {
//   if (num < 2) {
//     return num;
//   }

//   if (num % 2 == 0) {
//     return fib(num - 1) + fib(num - 3);
//   }

//   return fib(num - 2) + fib(num - 4);

// };


// console.log(fib(N))
// console.log('\n\n')


// function* subsets(values, sum, parts = []) {
//   var i, s;

//   for (i = 0; i < values.length; i++) {
//     s = sum - values[i];
//     if (!s) {
//       yield [...parts, values[i]];
//     } else if (s > 0) {
//       yield* subsets(values.slice(i + 1), s, [...parts, values[i]]);
//     }
//   }
// }
// N = 15
// const A = []
// for (let i = 1; i <= N; i++) {
//   A.push(i)
// }
// // console.log(result)
// const count = (n, k = 1) => {
//   if (n < 1) {
//     return k
//   }

//   return 1 + count(n - k)
// }

// console.log(`Bez powtorzen ${N}: ${[...subsets(A, N)].length}`)
// // Bez powtorzen 5: 3
// // Bez powtorzen 6: 4
// // Bez powtorzen 7: 5
// // Bez powtorzen 8: 6
// // Bez powtorzen 9: 8
// // Bez powtorzen 10: 10
// // Bez powtorzen 11: 12
// // Bez powtorzen 13: 18

// const a = (N, n, k = 0) => {
//   if (n <= 1) {
//     k += 1;
//     console.log(k)
//     return;
//   }

//   for (let i = N; i > 1; i -= 2) {
//     a(N, n - i, k + 1)
//   }
// }

// console.log(a(N))

