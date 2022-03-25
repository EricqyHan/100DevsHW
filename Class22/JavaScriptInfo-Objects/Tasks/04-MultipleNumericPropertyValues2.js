// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};

console.log(multiplyNumeric(menu));

let menu2 = {
  width: 300,
  height: 600,
  title: "my stuff",
};

const multiplyNumeric2 = (object) => {
  for (let key in object) {
    if (typeof object[key] == "number") {
      object[key] *= 4;
    }
  }
  return object;
};

console.log(multiplyNumeric2(menu2));
