// Check for Empitness

let schedule = {};
let schedule2 = {
  name: "Scott",
  age: 88,
};

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(schedule2));
console.log(isEmpty(schedule2));
console.log(isEmpty(schedule2));
console.log(isEmpty(schedule2));
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
