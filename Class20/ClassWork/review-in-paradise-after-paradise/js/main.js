// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi".
//If the first number is greater than the last number, alert "Bye".If they are equal, alert "We close in an hour".

let checkFirstAndLast = (arr) => {
  if (arr[0] < arr[1]) {
    console.log("hi");
  } else if (arr[0] > arr[1]) {
    console.log("bye");
  } else if (arr[0] === arr[1]) {
    console.log("We close in an hour");
  }
};

console.log(checkFirstAndLast([22, 44]));
