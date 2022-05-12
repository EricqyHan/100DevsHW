// Store data in arrays
// Arrays represents a lit of elements.

// prettier-ignore
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting", "Pacific Rim", "Zoro"];
movies.splice(1, 2);
console.log(movies);

// prettier-ignore
const movies2 = ["The Wolf of Wall Street", "Aquaman", "Zootopia", "Babysitting", "Pacific Rim", "Zoro"];
// will copy from index 1 to 3
let movies3 = movies2.slice(1, 5);
console.log(movies3);

const moviesObject = {
  movie1: "The Wolf of Wall Street",
  movie2: "Zootopia",
  movie3: "Babysitting",
};

// Storing different types of elements in an array, includng strings, numbers, booleans, and objects
const elements = ["hello", 7, { message: "Hi Mom" }, true];
console.log(elements.length);

// prettier-ignore
const movies4 = ["The Wolf of Wall Street", "Aquaman", "Zootopia", "Babysitting", "Pacific Rim", "Zoro"];
for (let i = 0; i < movies4.length; i++) {
  console.log(movies4[i]);
}

// for of
for (const movie of movies4) {
  console.log(movie);
}

// updating an arrays content
movies4.push("Doctor Strange 2");
console.log(movies4);
movies4.unshift("Ghostbusters");
console.log(movies4[0]);
// removing an element from an array
movies4.shift();
console.log(movies4);
movies4.pop();
console.log(movies4);
movies4.splice(1, 2);
console.log(movies4);

const musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");
musketeers.forEach((item) => {
  console.log(item);
});

musketeers.splice(2, 1);
for (let musketeer of musketeers) {
  console.log(musketeer);
}
