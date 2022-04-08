//Create an array of movies with at least three movies.
let movies = [
  "Pacific Rim",
  "The Matrix",
  "The Girl With The Dragon Tattoo",
  "Hackers",
];

//Using the array from above, store the first movie in a variable
let bestMovie = movies[0];
console.log(bestMovie);

//Get the length of the original array and store it in a new variable
let moviesLength = movies.length;
console.log(moviesLength);

//Get the last element in that array and store it in a new variable.
//What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movies[movies.length - 1];
console.log(lastMovie);
