const path = require("path");

// Base file name
console.log("File Name");
console.log(path.basename(__filename));
console.log("-----------");
// directory name
console.log("Directory name");
console.log(path.dirname(__filename));
console.log("-------------");

// file extension
console.log("File Extension");
console.log(path.extname(__filename));
console.log("--------------");

// Create Path Object
console.log("Path Object");
console.log(path.parse(__filename).base);
console.log("--------------");

// Concatenate Paths
console.log("Concatenate Paths");
console.log(path.join(__dirname, "test", "hello.html"));
