//Example fetch using pokemonapi.co
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(typeof data.bpi.USD.rate_float);
    //  console.log(`Bitcoin current USD Price is ${data.Object}`);
    document.querySelector(".price").innerText = data.bpi.USD.rate_float;
    document.querySelector(".priceTime").innerText = data.time.updated;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

// var price = "1,50,000";
// var priceInNumber = parseInt(price.replace(/,/g, ""), 10);
