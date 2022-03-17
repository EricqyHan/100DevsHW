// Arrow Functions
let sum = (a, b) => a + b;
console.log(sum(1, 5));

// What it would look like with a function expression
let sumExpression = function (a, b) {
  return a + b;
};

console.log(sumExpression(4, 5));

// went from three lines to one
// to make it shorter if we only have one argument
let double = (n) => n * 2;
console.log(double(3));

// if no argments
// let sayHi = () => console.log("Hello All");
// sayHi();

// let age = prompt("what is your age?", 18);

// let welcome = age < 18 ? () => alert("Hello") : () => alert("Greetings!");

// welcome();

// Multiline arrow function
let sum2 = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum2(1, 2));

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

function ask2(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask2(
  "Are you sure?",
  () => alert("You are really sure"),
  () => alert("You are not sure")
);
