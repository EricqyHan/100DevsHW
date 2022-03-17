let input = prompt("Please provide a number");
let parseInput = parseInt(input);

// for (let i = 1; i <= parseInput; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else if (i % 2 === 1) {
//     console.log(`${i} is odd`);
//   }
// }

let number = 0;
while (number !== parseInput) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else if (number % 2 === 1) {
    console.log(`${number} is odd`);
  }
  number++;
}

console.log("olah");
