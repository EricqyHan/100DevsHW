//Create an array of movie titles. Loop through the array and each element to the h2.
// let movies = ["Pacific Rim 2", "Independence Day 2", "23 Jump Street"];
// movies.forEach((item, index) => {
//   movies += document.querySelector("h2").innerText += ` Movies ${item}. `;
// });

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let reduceArray = [43, 21, 91, 19, 12, 34];
reduceArray.forEach((item, i) => {
  reduceArray[i] += item + 3;
});

console.log(reduceArray);

//Find the average of all the numbers from question three
let average = reduceArray.reduce((acc, c) => acc + c) / reduceArray.length;
console.log(average);
