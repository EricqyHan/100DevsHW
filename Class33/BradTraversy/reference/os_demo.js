const os = require("os");

// platform
console.log("OS Platform");
console.log(os.platform());
console.log("============");

// CPU Arch
console.log("CUP Arch");
console.log(os.arch());
console.log("==========");

// CPU Core Info
console.log("CUP CORE INFO");
console.log(os.cpus());
console.log("=============");

// Free Memory
console.log("Free Memory");
console.log(os.freemem());
console.log("==========");

// Total Memory
console.log("Total Memory");
console.log(os.totalmem());
console.log("============");

// home dir
console.log("Home Directory");
console.log(os.homedir());
console.log("=========");

// uptime
console.log("Uptime in seconds");
console.log(os.uptime());
console.log("===========");
