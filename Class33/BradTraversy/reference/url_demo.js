const url = require("url");
const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Seralized URL
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(" ");

// Host (root domain)
console.log("===========");
console.log("HOST");
console.log(myUrl.host);

// Host name - does not  get port
console.log(" ");
console.log("Host Name");
console.log(myUrl.hostname);
console.log(" ");

// pathname
console.log("========");
console.log("Pathname");
console.log(myUrl.pathname);
console.log(" ");

// Serialized Query
console.log("=======");
console.log("Searilized Query");
console.log(myUrl.search);
console.log(" ");

// Search Params
console.log("=====");
console.log("Search Params");
console.log(myUrl.searchParams);
console.log(" ");

// add params
console.log("======");
console.log("Add Params");
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params
console.log("=======");
console.log("Loop Through Params");
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
