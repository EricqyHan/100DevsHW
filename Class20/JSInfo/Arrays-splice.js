// Arrays Splice - is the swiss army knife for arrays

let arr = ["I", "go", "home"];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);

let arr2 = ["I", "Study", "JavaScript"];
// Starting from the 1 index it removed 1
console.log(arr2.splice(1, 1));
console.log(arr2);

let arr3 = ["I", "Study", "JavaScript", "Right", "Now"];
// starting form the 0 index, it removed three
arr3.splice(0, 3, "Let's", "dance");

console.log(arr3);

let arr4 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr4.splice(0, 2);
console.log(removed);

let arr5 = ["I", "Study", "JavaScript"];
arr5.splice(2, 0, "complex", "languages");
console.log(arr5);

let negArray = [1, 2, 5];
// from the end, insert 3 and 4
negArray.splice(-1, 0, 3, 4);
console.log(negArray);
