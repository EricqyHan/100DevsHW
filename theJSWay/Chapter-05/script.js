// Write Funcions
const message = "I hate code wars";

function sayHello() {
  const message = "hello";
  return message;
}

console.log(sayHello());

function sayHello2(name) {
  // Here, "name" is the function parameter
  const message = `Hello, ${name}!`;
  return message;
}

let name = "Baptiste";
console.log(sayHello(name));
name = "Thomas";
console.log(sayHello(name));

const hi = function (name) {
  const message = `Hello, ${name}!`;
  return message;
};

console.log(hi("Richard"));
