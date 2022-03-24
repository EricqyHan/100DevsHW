let favoriteShows = [
  "Silicon Valley",
  "Simpsons",
  "American Dad",
  "Mr. Robot",
  "South Park",
];
console.log(favoriteShows.length);

// Push adds to the end
favoriteShows.push("Battlestar Galastica");
console.log(favoriteShows);
favoriteShows.push("Agents of Shield");
console.log(favoriteShows);
// Pop takes off from the end
favoriteShows.pop();
console.log(favoriteShows);

favoriteShows.shift();
console.log(favoriteShows);

favoriteShows.unshift("F is for Family");
console.log(favoriteShows);
