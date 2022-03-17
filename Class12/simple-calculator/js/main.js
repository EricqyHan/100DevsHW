let total = 0;
let twentyOne = document.getElementById("blackjack");

document.querySelector("#zero").addEventListener("click", zero);
document.querySelector("#one").addEventListener("click", one);
document.querySelector("#two").addEventListener("click", two);
document.querySelector("#three").addEventListener("click", three);
document.querySelector("#negOne").addEventListener("click", negOne);
document.querySelector("#negTwo").addEventListener("click", negTwo);

function zero() {
  total = 0;
  document.querySelector("#results").textContent = total;
  document.querySelector("#blackjack").textContent = "";
  console.log("0");
}

function one() {
  total = total + 1;
  document.querySelector("#results").textContent = total;
  console.log("1");

  if (total === 21) {
    blackjack.textContent = "BlackJack";
  }
}

function two() {
  total = total + 2;
  document.querySelector("#results").textContent = total;
  console.log("2");

  if (total === 21) {
    blackjack.textContent = "BlackJack";
  }
}

function three() {
  total = total + 3;
  document.querySelector("#results").textContent = total;
  console.log("3");

  if (total === 21) {
    blackjack.textContent = "BlackJack";
  }
}

function negOne() {
  total = total - 1;
  document.querySelector("#results").textContent = total;
  if (total === 21) {
    blackjack.textContent = "BlackJack";
  }
}

function negTwo() {
  total = total - 2;
  document.querySelector("#results").textContent = total;

  if (total === 21) {
    blackjack.textContent = "BlackJack";
  }
}
