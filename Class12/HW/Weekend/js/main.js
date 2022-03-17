console.log("hi");
let dayText = document.getElementById("dayOfWeek");
let timeText = document.getElementById("codingTime");
// Query selector is to get element based on css selector while getElementById is getting an elementby it's ID
document.querySelector("#check").addEventListener("click", check);
// document.querySelector("#check").addEventListener("keypress", function (e) {
// }

function check() {
  // We use const because we reset dayLowerCase everytime.
  const dayLowerCase = document.querySelector("#day").value.toLowerCase();
  if (dayLowerCase === "monday" || dayLowerCase === "wednesday") {
    console.log("Boring day");
    dayText.textContent = "Boring Day";
    timeText.textContent = "Code All Day";
  } else if (dayLowerCase === "tuesday" || dayLowerCase === "thursday") {
    console.log("Class Day");
    dayText.textContent = "Class Day";
    timeText.textContent = "Class at 6:30 to 9:30 EST";
  } else if (dayLowerCase === "friday") {
    console.log("Friday!!!!!");
    dayText.textContent = "FRIDAY!!!!";
    timeText.textContent = "Which Seat Should I take?!";
    document.getElementById("rebecca").src =
      "https://www.youtube.com/embed/iCFOcqsnc9Y?controls=0?&autoplay=1&mute=0";
  } else if (dayLowerCase === "saturday") {
    console.log("Saturday");
    dayText.textContent = "Saturday";
    timeText.textContent = "Yesterday Was Friday.";
  } else if (dayLowerCase === "sunday") {
    dayText.textContent = "Office Hours Day";
    timeText.textContent = "Office hours starts at 12:00 EST to 3:00 EST";
    console.log("Sunday");
  } else {
    console.log("Other");
    dayText.textContent = "Other";
    timeText.textContent = "Learn to spell or put in a real day";
  }
}
//
