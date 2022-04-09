fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data.slip.advice);
    console.log(data);
    document.querySelector("h3").innerText = data.slip.advice;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
