// Value types and Reference types
// values - numbers, string, symbol, undefined, null
// reference types - objects, functions, arrays

let x = { value: 10 };
let y = x;

x.value = 20;

// Primitives are copied by their value
// objects are coped by their reference

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
