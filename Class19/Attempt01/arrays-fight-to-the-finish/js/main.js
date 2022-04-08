//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ["Super Troopers 2", "Pacific Rim 2", "Independence Day 2"];

// movieTitles.forEach((item, index) => {
//   console.log(`${item} is a great movie`);
//   document.querySelector("h2").innerText += ` ${item} is a great movie. `;
// });

movieTitles.forEach((item, index) => {
  console.log(`${item} is a great movie`);
});

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [42, 88, 32, 59, 52, 11, 17, 9];
numbers.forEach((item, i) => {
  numbers[i] += item + 3;
});

console.log(numbers);

//Find the average of all the numbers from question three
let average = numbers.reduce((acc, i) => acc + i, 0) / numbers.length;
console.log(average);
