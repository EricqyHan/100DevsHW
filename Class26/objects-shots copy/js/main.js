//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// See if we can get it so that drink names can have a space
// https://www.thecocktaildb.com/api.php
document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks);
      //  document.querySelector("input").value = data.strDrink;
      //  document.querySelector("img").src = data.strDrinkThumb;
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  //   name, photo, instructons
}
