// Copy and sort array

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sortedArray = copySorted(arr);
console.log(arr);
console.log(sortedArray);

let arr2 = [
  "HTML",
  "JavaScript",
  "CSS",
  "jQuery",
  "React",
  "Power BI",
  "Power Apps",
];
console.log(arr2.sort());
console.log(arr2);

function sortedArr2(arr2) {
  return arr2.slice().sort();
}

console.log(
  sortedArr2([
    "HTML",
    "JavaScript",
    "Power BI",
    "Power Apps",
    "CSS",
    "jQuery",
    "React",
  ])
);
