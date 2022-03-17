function sayHi() {
  console.log("Hi!!!");
}

sayHi();

// Function Expression Way
let sayHello = function () {
  console.log("Hello There!");
};

console.log(sayHello);

// Callback functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
