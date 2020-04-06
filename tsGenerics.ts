const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1]
}

console.log(last([1, 2, 3]))
console.log(last(['a', 'b', 'c']))

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

// i like how the editor tells me the type of arr1 and arr2
const arr1 = makeArr(1, 'a')
const arr2 = makeArr('a', 1)

interface UserName {
  firstName: string
  lastName: string
  fullName?: string
}

const makeFullName = (obj: UserName): UserName => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}

const yc = makeFullName({firstName: 'yap', lastName: 'yowchun'})