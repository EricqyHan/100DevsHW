// the if statement

const number = 2;
if (number > 0) {
  console.log(`${number} is positive`);
}

// The else statement
const number2 = 5;
if (number2 > 0) {
  console.log(`${number} is a negative or zero number`);
} else {
  console.log(`${number} is negative or zero`);
}

// Nesting conditions
const number3 = 0;
if (number3 > 0) {
  console.log(`${number3} is positive`);
} else {
  if (number3 < 0) {
    console.log(`${number3} is less than zero`);
  } else {
    console.log(`${number3} is 0`);
  }
}

// better way to write conditions
const number4 = 0;
if (number4 > 0) {
  console.log(`${number4} is positive`);
} else if (number4 < 0) {
  console.log(`${number4} is negative`);
} else {
  console.log(`${number4} is zero`);
}

// Additional logic
const number5 = 4;
if (number5 >= 0 && number <= 100) {
  console.log(`${number} is between 0 and 100, both included`);
}

// or operator
const number6 = 101;
if (number6 < 0 || number6 > 100) {
  console.log(`${number6} is not between 0 and 100`);
}

// Not operator
const number7 = 90;
if (!(number7 > 100)) {
  console.log(`${number7} is less than or equal to 100`);
}

console.log(!true);
console.log(!false);

// if statement - weather
const input = "windy";
const weather = input.toLowerCase();
if (weather === "sunny") {
  console.log("T-shirt time");
} else if (weather === "windy") {
  console.log("Windbreaker life");
} else if (weather === "rainy") {
  console.log("Bring the unbrella!");
} else if (weather === "snowy") {
  console.log("Just stay inside");
} else {
  console.log("Not a valid weather");
}

// switch statement

switch (weather) {
  case "sunny":
    console.log("t-shirt time");
    break;
  case "windy":
    console.log("Windbreaker life");
    break;
  case "rainy":
    console.log("Bring that unbrella");
    break;
  case "snowy":
    console.log("Don't leave the house");
    break;
  default:
    console.log("Not a valid weather type");
}

// Coding time

let day = "MONDAY";
let dayInput = day.toLowerCase();
switch (dayInput) {
  case "monday":
    console.log("Tuesday");
    break;
  case "tuesday":
    console.log("Wednesday");
    break;
  case "wednesday":
    console.log("Thrusday");
    break;
  case "thrusday":
    console.log("Friday");
    break;
  case "friday":
    console.log("Saturday");
    break;
  case "saturday":
    console.log("Sunday");
    break;
  case "sunday":
    console.log("Monday");
    break;
}

let nb1 = 8;
let nb2 = 9;
let nb3 = 8;

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  console.log(nb1++);
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

let month = "January";
switch (month) {
  case "January":
    console.log(31);
    break;
  case "February":
    console.log(28);
    break;
  case "March":
    console.log(31);
    break;
  case "April":
    console.log(30);
    break;
  case "May":
    console.log(31);
    break;
  case "June":
    console.log(30);
    break;
  case "July":
    console.log(31);
    break;
  case "August":
    console.log(31);
    break;
  case "September":
    console.log(30);
    break;
  case "October":
    console.log(31);
    break;
  case "November":
    console.log(30);
    break;
  case "December":
    console.log(31);
    break;
  default:
    console.log("Not a month");
}

let h = 8;
let m = 3;
let s = 33;

if (h === 23 && m === 59 && s === 59) {
  h = 0;
  m = 0;
  s = 0;
  console.log(`${h}h${m}m${s}s`);
} else if (m === 59 && s === 59) {
  h += 1;
  m = 0;
  s = 0;
  console.log(`${h}h${m}m${s}s`);
} else if (s === 59) {
  m += 1;
  s = 0;
  console.log(`${h}h${m}m${s}s`);
} else {
  s += 1;
  console.log(`${h}h${m}m${s}s`);
}
