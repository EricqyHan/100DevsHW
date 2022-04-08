let user = new Object(); // "object constructor" syntax

let user3 = {
  name: "John",
  age: 30,
};

console.log(user3.name);
console.log(user3.age);
user3.isAdmin = true;
delete user3.age;
console.log(user3);

let user2 = {}; // object literal
user2["likes birds"] = true;
console.log(user2["likes birds"]);
delete user2["likes birds"];

let newUsers = {};
newUsers.name = "John";
newUsers.surName = "Smith";
newUsers.name = "Pete";
delete user.name;

// Check for Emptyiness
let schedule = {};
schedule.name = "john";

let isEmpty = (object) => {
  for (let key in object) {
    return false;
  }
  return true;
};

console.log(isEmpty(schedule));

// Salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let totalSalaries = 0;
for (let i in salaries) {
  totalSalaries += salaries[i];
}
console.log(totalSalaries);

// Multiplying Numeric values by 2
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

console.log(multiplyNumeric(menu));
console.log(menu);
