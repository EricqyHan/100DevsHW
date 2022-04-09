//Example fetch using pokemonapi.co
fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    //  document.querySelector("img").src = [0];
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

// document.querySelector("button").addEventListener("click", getBird);

// function getBird() {

// }
