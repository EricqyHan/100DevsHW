let ask = prompt(
  "Give me a number and I will show you the multiplication table through 9's"
);
let askPassInput = parseInt(ask);

for (let i = 1; i <= 9; i++) {
  console.log(`${askPassInput} * ${i} = ${askPassInput * i}`);
}
