let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = users.filter((item) => item.id < 3 && item.id > 1);
console.log(someUsers);
