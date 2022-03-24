// Slice

let arr = ["t", "e", "s", "t"];
// slice is [start, end]
arr.slice(1, 3);

console.log(arr.slice(1, 3));

let arr2 = ["t", "e", "s", "t"];
console.log(arr.slice(-2));

let arr3 = ["I", "study", "JavaScript", "right", "now"];
console.log(arr3.slice(1, 4));
console.log(arr3.slice(-3));

// concat
let rays = [1, 2];
console.log(rays.concat([3, 4]));
console.log(rays.concat([3, 4], [5, 6]));
console.log(rays.concat([3, 4], 5, 6));

let arr5 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

console.log(arr5.concat(arrayLike));
