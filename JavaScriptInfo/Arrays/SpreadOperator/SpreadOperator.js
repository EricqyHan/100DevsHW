// Spread Operator

let a = [10, 20];
let b = "rank";
let c = [30, "points"];
let d = "run";

let e = a.concat(b, c, d);
console.log(e);
let f = [...a, b, ...c, d];
console.log(f);

// JavaScript Spread operator
// Colt Steele
//

console.log(Math.min(45, 23, 76, 1, 2, -4));

const temperatures = [76, 72, 68, 79, 54, 65];
console.log(Math.min(temperatures));
// now all numbers are treated as individuals
console.log(Math.min(...temperatures));

console.log("hello", "there", "!");

const tvShows = ["Lost", "BSG", "Agents of Shield", "Mandalorian"];

console.log(...tvShows);

console.log("This shit is bananas: ", ..."BANANAS");
Math.min(..."9832");
