const codeBlocker = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
    return "billion loops";
  }
};

console.log("Synchronous 1");
console.log(codeBlocker());
console.log("synchronous 2");
