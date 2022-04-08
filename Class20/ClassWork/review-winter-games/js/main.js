//Create a function that takes in an array of numbers.
//Return a new array containing every even number from the original array(do not use map or filter)

function onlyEvens(num) {
  let evens = [];
  num.forEach((n) => {
    if (n % 2 === 0) {
      evens.push(n);
    }
  });
  return evens;
}

console.log(onlyEvens([1, 3, 5, 7, 9, 44, 88, 100]));

function onlyOdds(number) {
  let odds = [];
  number.forEach((n) => {
    if (n % 2 !== 0) {
      odds.push(n);
    }
  });
  return odds;
}

console.log(onlyOdds([1, 3, 5, 7, 9, 44, 88, 100]));
