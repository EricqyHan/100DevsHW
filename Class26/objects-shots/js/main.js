//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// See if we can get it so that drink names can have a space
// https://www.thecocktaildb.com/api.php
document.querySelector(".searchDrink").addEventListener("click", getDrink);
document.querySelector(".buttonUp").addEventListener("click", nextDrinkUp);
document.querySelector(".buttonDown").addEventListener("click", previousDrink);

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

function nextDrinkUp() {
  let arrayNumber = 0;
  let drink = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      if (data.drinks[arrayNumber] === data.drinks[data.drinks.length - 1]) {
        data.drinks[data.drinks.length - 1];
        document.querySelector("h2").innerText =
          data.drinks[data.drinks.length - 1].strDrink;
        document.querySelector("img").src =
          data.drinks[data.drinks.length - 1].strDrinkThumb;
        document.querySelector("h3").innerText =
          data.drinks[data.drinks.length - 1].strInstructions;
      } else {
        arrayNumber = arrayNumber + 1;
        data.drinks[arrayNumber];
        document.querySelector("h2").innerText =
          data.drinks[arrayNumber].strDrink;
        document.querySelector("img").src =
          data.drinks[arrayNumber].strDrinkThumb;
        document.querySelector("h3").innerText =
          data.drinks[arrayNumber].strInstructions;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function previousDrink() {
  let arrayNumber = 0;
  let drink = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      if (data.drinks[arrayNumber] === data.drinks[data.drinks.length - 1]) {
        data.drinks[data.drinks.length - 1];
        document.querySelector("h2").innerText =
          data.drinks[data.drinks.length - 1].strDrink;
        document.querySelector("img").src =
          data.drinks[data.drinks.length - 1].strDrinkThumb;
        document.querySelector("h3").innerText =
          data.drinks[data.drinks.length - 1].strInstructions;
      } else {
        arrayNumber = arrayNumber - 1;
        data.drinks[arrayNumber];
        document.querySelector("h2").innerText =
          data.drinks[arrayNumber].strDrink;
        document.querySelector("img").src =
          data.drinks[arrayNumber].strDrinkThumb;
        document.querySelector("h3").innerText =
          data.drinks[arrayNumber].strInstructions;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
