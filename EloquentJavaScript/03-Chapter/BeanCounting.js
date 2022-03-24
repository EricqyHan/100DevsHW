// Bean Counting

// function countBIndex(string) {
//   let findB = string.split("");
//   console.log(findB);
//   let indexOfChar = findB.indexOf("b");
//   console.log(indexOfChar);
// }
// console.log(countB("asbdfb"));

function countB(string) {
  let findB = string.split("B").length - 1;
  console.log(findB);
  return findB;
}

console.log(countB("dadfbaB"));

function countSelectedChar(string, char) {
  let findChars = string.split(char).length - 1;
  console.log(findChars);
  return findChars;
}

console.log(countSelectedChar("asdfaag", "a"));
