function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// Coding Time

// Square the given number x
function square1(x) {
  return x ** 2;
}

// Square the given number x
const square2 = (x) => x ** 2;

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5));

// min of two numbers
const min = (x, y) => (x > y ? x : y);
console.log(min(4.5, 5));

// Calculator
function calculate(x, y, z) {
  if (y === "+") {
    return x + y;
  } else if (y === "-") {
    return x - y;
  } else if (y === "*") {
    return x * y;
  } else if (y === "/") {
    return x / y;
  }
}

// circumference
