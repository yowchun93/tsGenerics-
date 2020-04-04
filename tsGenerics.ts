
// generic array
type numArray = Array<number>

const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1 ];
}

const l = last([1,2,3]);
const l2 = last(['a', 'b', 'c']);

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");

// make function accept object with firstName and lastName
// const makeFullName = (obj: {firstName: string, lastName: string}) => {
//   return {
//     ...obj,
//     fullName: obj.firstName + ' ' + obj.lastName
//   }
// }

// i think i kind of get it know, generics allow you to declare a type?
// can this be done using interface instead ?
const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}

const yc = makeFullName({firstName: 'yap', lastName: 'yowchun'})
const yc2 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 })

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
