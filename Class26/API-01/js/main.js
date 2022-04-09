document.querySelector("button").addEventListener("click", getExcuse);

function getExcuse() {
  let category = document.querySelector("#excuses").value;

  fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].excuse);
      document.querySelector("span").innerText = data[0].excuse;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
