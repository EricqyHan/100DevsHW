const movie1 = "The Wolf of Wall Street";
const movie2 = "Zootopia";
const movie3 = "Babysitting";

// or

const movies = {
  movie1: "The Wolf of Wall Street",
  movie2: "Zootopia",
  movie3: "Babysitting",
};
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// even better
const arrayOfMovies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];

const elements = ["Hello", 7, { message: "Hi mom" }, true];
console.log(elements[2]);
console.log(elements.length);

arrayOfMovies.forEach((arrayOfMovie) => {
  console.log(arrayOfMovie);
});

for (const movie of arrayOfMovies) {
  console.log(movie);
}

arrayOfMovies.push("Ghostbusters");
console.log(arrayOfMovies);
arrayOfMovies.unshift("Pacific Rim");
console.log(arrayOfMovies);
console.log(arrayOfMovies[0]);

// Removing elements
arrayOfMovies.pop();
// pop removes from the end
console.log(arrayOfMovies);

// Remove from beginning
arrayOfMovies.shift();
console.log(arrayOfMovies);

const favShows = [
  "Lost",
  "BSG",
  "Agents of Shield",
  "Mr. Robot",
  "Silicon Valley",
  "Daredevil",
  "The Punisher",
];
favShows.splice(1, 1);
console.log(favShows);

// Musketeers
const musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.forEach((x) => {
  console.log(x);
});
musketeers.push("D,Artagnan");

musketeers.forEach((x) => {
  console.log(x);
});

musketeers.splice(2, 1);
for (const musketeer of musketeers) {
  console.log(musketeer);
}

// sum of values
function addArrays(array) {
  let additionOfArrays = 0;
  for (let add of array) {
    console.log(add);
    additionOfArrays += add;
  }
  return additionOfArrays;
}

console.log(addArrays([3, 11, 7, 2, 9, 10]));

// Array maximum

// list of words
function stopWord() {
  let ask = prompt("type in a word").toLowerCase();
  let stopWordArray = [];
  while (ask !== "stop") {
    stopWordArray.push(ask);
    ask;
  }
  for (let arrayExceptStop of stopWordArray) {
    return arrayExceptStop[-1];
  }
}

// if (ask !== "stop") {
//   stopWordArray.push(ask);
//   ask;
// } else if (ask === "stop") {
//   console.log("HI");
// }
