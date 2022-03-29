// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }

// console.log(filterRangeInPlace(arr, 1, 4));

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // remove if ourside of interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

console.log(filterRangeInPlace(arr, 1, 4));
