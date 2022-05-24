const http = require("http");

http
  .createServer((req, res) => {
    let coinFlip = ["Heads", "Tails"];
    let randomFlip = Math.floor(Math.random() * coinFlip.length);
    res.write("Heads or tails? ");
    res.write(coinFlip[randomFlip]);
    res.end();
  })
  .listen(8080);
