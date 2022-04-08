let arr = [2, 5, 3, 11];
arr.sort();
console.log(arr);

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr.sort(compare);
console.log(arr);

let somethingCool = [1, -2, 15, 2, 0, 8];

somethingCool.sort(function (a, b) {
  return a - b;
});

console.log(somethingCool);

somethingCool.sort((a, b) => a - b);
console.log(somethingCool);

let lost = [23, 42, 4, 15, 16, 8];

lost.sort((a, b) => a - b);

console.log(lost);

let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => b - a);
console.log(arr4);
