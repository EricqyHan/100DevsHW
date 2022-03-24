// Transform an array
let results = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(results);

// sort
let arr = [1, 334, 23];
arr.sort();
console.log(arr);

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1;
}

console.log(compare(3, 4));

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + " <> " + b);
  return a - b;
});

let kor = [1, 3, 2, 99, 15];

kor.sort(function (a, b) {
  return a - b;
});

console.log(kor);

kor.sort((a, b) => a - b);

console.log(kor);

// local compare
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => (a > b ? 1 : -1)));

// split and join
let names = "Bilbo, Gandalf, Nazgul";
// makes a string into an array
let nameLOTR = names.split(", ");
console.log(nameLOTR);

for (let name of nameLOTR) {
  console.log(`A message to ${name}.`);
}

let bilbo = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 3);
// split will show how many are listed
console.log(bilbo);

let test = "test";
console.log(test.split(" "));
