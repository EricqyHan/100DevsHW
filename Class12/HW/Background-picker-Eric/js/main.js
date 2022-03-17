const button = document.querySelector("#lucky");
const randomColorFunction = [blueChair, blackChair, pinkChair, purpleChair];

button.addEventListener("click", function () {
  randomColorFunction[Math.floor(Math.random() * randomColorFunction.length)]();
  console.log(randomColorFunction);
});

let img = document.querySelector("img");
document.getElementById("blue").onclick = blueChair;
document.getElementById("black").onclick = blackChair;
document.getElementById("pink").onclick = pinkChair;
document.getElementById("purple").onclick = purpleChair;

function blueChair() {
  document.querySelector("body").style.backgroundColor = "rgb(0, 0, 255, 1)";
  document.querySelector("body").style.color = "white";
  img.src = "img/BlueChair.png";
}

function blackChair() {
  document.querySelector("body").style.backgroundColor = "rgb(0,0,0, 1)";
  document.querySelector("body").style.color = "white";
  document.getElementById("color-border").style.borderColor = "red";
  img.src = "img/BlackChair.png";
}

function pinkChair() {
  document.querySelector("body").style.backgroundColor =
    "rgb(253, 185, 200, 1)";
  document.querySelector("body").style.color = "blue";
  img.src = "img/PinkChair.png";
}

function purpleChair() {
  document.querySelector("body").style.backgroundColor =
    "rgb(2221, 160, 221, 1)";
  document.querySelector("body").style.color = "black";
  img.src = "img/PurpleChair.png";
}
