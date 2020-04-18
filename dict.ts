type Dict<T> = {
  [k: string]: T | undefined;
}

// Array.prototype.map but for Dict
const mapDict = <T, S>(dict: Dict<T>, fn: (arg: T) => S): Dict<S> => {
  const out: Dict<S> = {};

  Object.keys(dict).forEach((dKey, _) => {
    const item = dict[dKey];
    if (typeof item !== undefined ) {
      out[dKey] = fn(item);
    }
  });

  return out;
}

const dict: Dict<string> = {
  a: 'hello',
  b: 'world'
}

// { a: [ 'hello' ], b: [ 'world' ] }
console.log(mapDict(dict, (str) => [str]))
// { a: 'hello' , b: 'world' }
console.log(mapDict(dict, (str) => str))
// { a: { val: 'hello' }, b: { val: 'world' } }
console.log(mapDict(dict, (str) => ({val: str}) ))
