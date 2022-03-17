let ask = prompt("Enter a number!");
let askPasseInput = parseInt(ask);

// if (ask < 50 || ask > 100) {
//   prompt("Enter a number between 50 and 100");
// } else {
//   for (let i = 1; i <= askPasseInput; i++) {
//     console.log(i);
//     i++;
//   }
// }

while (askPasseInput <= 100) {
  if (askPasseInput < 50 || askPasseInput > 100) {
    prompt("Enter a number between 50 and 100");
  } else {
    for (let i = 1; i <= askPasseInput; i++) {
      console.log(i);
      i++;
    }
  }
}
