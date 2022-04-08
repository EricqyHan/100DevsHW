// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let trueVar = true;
console.log(trueVar);

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "green";
color = "red";

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
let fourNums = (a, b, c, d) => {
  let sumFirstThree = a + b + c;
  return sumFirstThree / d;
};
console.log(fourNums(8, 6, 4, 2));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
let twoNumbers = (a, b) => {
  return a ** b;
};

console.log(twoNumbers(4, 3));

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
let boolString = (bool, string) => {
  if (bool === true) {
    console.log(string);
  } else {
    console.log(`${string} ${string}`);
  }
};

//*Loops*
//Create a function that takes in a number.
//Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number,
//if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

let fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} Fizzbuzz`);
    } else if (i % 5 === 0) {
      console.log(`${i} Fizz`);
    } else if (i % 3 === 0) {
      console.log(`${i} Buzz`);
    } else {
      console.log(`${i}`);
    }
  }
};
