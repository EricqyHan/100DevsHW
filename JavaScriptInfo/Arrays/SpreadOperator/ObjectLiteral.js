// Object Literals
const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };
const hybrid = { name: "Gryphon", ...lion, ...eagle };
console.log(hybrid);
