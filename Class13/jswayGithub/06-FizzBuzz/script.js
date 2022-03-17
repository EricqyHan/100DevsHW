// let fb = 0;
// console.log(`For Loop Version`);
// for (i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} - FIZZBUZZ`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} - FIZZ`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} - BUZZ`);
//   } else if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(`${i}`);
//   }
// }

console.log("While Loop Version");

let fb2 = 0;
while (fb2 < 100) {
  fb2 = fb2 + 1;
  if (fb2 % 3 === 0 && fb2 % 5 === 0) {
    console.log(`${fb2} - FIZZBUZZ`);
    continue;
  }
  if (fb2 % 3 === 0) {
    console.log(`${fb2} - FIZZ`);
    continue;
  }
  if (fb2 % 5 === 0) {
    console.log(`${fb2} - BUZZ`);
    continue;
  }
  if (fb2 % 3 !== 0 && fb2 % 5 !== 0) {
    console.log(`${fb2}`);
    continue;
  }
  //   console.log(fb2.toString());
}
