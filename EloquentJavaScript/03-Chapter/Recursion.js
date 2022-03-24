function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(4, 3));

let add = function (n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + add(n - 1);
  }
};

console.log(add(1500));

// Recursive Even function

function isEven(n) {
  if (n < 0) return "try again";
  if (n == 0) return "even";
  if (n == 1) return "odd";
  else return isEven(n - 2);
}

console.log(isEven(75));

function isReallyEven(n) {
  if (n < 0) {
    return "try again";
  } else if (n == 0) {
    return "even";
  } else if (n == 1) {
    return "odd";
  } else return isEven(n - 2);
}

console.log(isReallyEven(50));
