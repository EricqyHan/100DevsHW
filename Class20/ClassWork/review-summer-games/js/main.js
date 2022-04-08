//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

let multiplyArrayIndexes = (arr) => {
  let product = 1;
  arr.forEach((num) => (product *= num));
  console.log(product);
};

console.log(multiplyArrayIndexes([4, 5, 1]));

let addArrayIndex = (arr2) => {
  let product = 0;
  arr2.forEach((num) => (product += num));
  console.log(product);
};

console.log(addArrayIndex([4, 5, 1]));
