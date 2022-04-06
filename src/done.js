const N = 500

const STUDENTS_COOWORK = {}
const STUDENTS = []
for (let i = 0; i < N; i++) {
  STUDENTS.push(i)
  for (let j = i + 1; j < N; j++) {
    STUDENTS_COOWORK[`${i}-${j}`] = Math.floor(Math.random() * 11) - 5
  }
}

const calculateGroupCoowork = group => {
  let total_coowork = 0
  for (let i = 0; i < group.length - 1; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const a = group[i]
      const b = group[j]
      total_coowork += STUDENTS_COOWORK[`${a}-${b}`] === undefined ? STUDENTS_COOWORK[`${b}-${a}`] : STUDENTS_COOWORK[`${a}-${b}`]
    }
  }
  return total_coowork
}

const shuffle = arr => {
  const copy = arr.slice()
  for (let i = copy.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[rand]] = [copy[rand], copy[i]];
  }
  return copy
};

const shuffled = shuffle(STUDENTS)
const A = shuffled.slice(0, Math.floor(N / 2))
const B = shuffled.slice(Math.floor(N / 2), shuffled.length)

const aCoowork = calculateGroupCoowork(A)
const bCoowork = calculateGroupCoowork(B)

const the_best_groups_division = {
  coowork: aCoowork + bCoowork,
  groups_coowork: [aCoowork, bCoowork],
  A: A,
  B: B,
}

const getStudent = (arr, index) => arr.splice(index, 1)

for (let i = 0; i < N; i++) {
  if (A.length < 3 || B.length < 3) {
    continue;
  }

  let index = A.findIndex(student => student === i)

  if (index > -1) {
    const student = getStudent(A, index)
    const newACoowork = calculateGroupCoowork(A)
    const newBCoowork = calculateGroupCoowork([...B, student])

    if (newACoowork + newBCoowork > the_best_groups_division.coowork) {
      the_best_groups_division.coowork = newACoowork + newBCoowork
      the_best_groups_division.groups_coowork = [newACoowork, newBCoowork]
      the_best_groups_division.A = A
      the_best_groups_division.B = B
      B.push(student)
    } else {
      A.push(student)
    }

  } else {
    index = B.findIndex(student => student === i)
    const student = getStudent(B, index)
    const newACoowork = calculateGroupCoowork([...A, student])
    const newBCoowork = calculateGroupCoowork(B)

    if (newACoowork + newBCoowork > the_best_groups_division.coowork) {
      the_best_groups_division.coowork = newACoowork + newBCoowork
      the_best_groups_division.groups_coowork = [newACoowork, newBCoowork]
      the_best_groups_division.A = A
      the_best_groups_division.B = B
      A.push(student)
    } else {
      B.push(student)
    }
  }
}

console.log(`length => A: ${A.length}, B: ${B.length}, N: ${N} V: ${A.length + B.length}`)
Object.keys(the_best_groups_division).forEach((key) => {
  console.log(`${key}: ${the_best_groups_division[key]}`)
})