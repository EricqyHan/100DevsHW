// The Call Stack

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// Optional Arguments
function square(x) {
  return x * x;
}

// Extra arguments are ignored
console.log(square(4, true, "hedgehog"));

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
console.log(minus(100, 32));

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

//  Closure
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
