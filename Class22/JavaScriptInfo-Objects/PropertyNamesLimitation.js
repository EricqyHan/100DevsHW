let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return);

let obj2 = {
  0: "test",
};

console.log(obj2["0"]);
//console.log(ojb2[0]);

let user = { name: "John", age: 32 };
console.log(user.noSuchProperty === undefined);
console.log("age" in user);
console.log("name" in user);
