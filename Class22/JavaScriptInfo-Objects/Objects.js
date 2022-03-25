// Objects
let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};

console.log(user.name);
console.log(user.age);

user.isAdmin = true;
console.log(user);

// to remove a property, we can use delete operator
delete user.age;
console.log(user.age);
console.log(user["likes birds"]);

let key = "likes birds";
console.log(user[key]);

// let user2 = {
//   name: "Ken",
//   age: 30,
// };

// let key2 = prompt(" what do you want to know about the user?", "name");
// console.log(user2[key2]);

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5,
};
console.log(bag);

// Promperty value shorthand

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("John", 30);
console.log(user.name);
