// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "Pizza";
favFood = "Pineapple Pizza";

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newString = "something cool";
console.log(newString.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
let threeNumbers = (a, b, c) => {
  return (a * b) / c;
};

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
let oneRingToRuleThemAll = (a) => {
  return Math.cbrt(a);
};

console.log(oneRingToRuleThemAll(33));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
let month = (month) => {
  if (
    month === "may" ||
    month === "june" ||
    month === "july" ||
    month === "august" ||
    month === "september"
  ) {
    return `Yay`;
  } else if (
    month === "january" ||
    month === "february" ||
    month === "march" ||
    month === "april" ||
    month === "october" ||
    month === "december"
  ) {
    return `Boo`;
  }
};

console.log(month("january"));

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
let skipEvery5 = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
};
