// Searching in array

let arr = [1, 2, false];

console.log(arr.indexOf(0));
console.log(arr.indexOf(false));
console.log(arr.indexOf(1));
console.log(arr.indexOf(2));
console.log(arr.indexOf(null));
console.log(arr.includes(1));

const arr2 = [NaN];
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

// Find
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id === 1);
console.log(user.name);
