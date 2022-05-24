// Create first object
// const myObject = {
//   property1: value1,
//   property2: value2,
//   method1() {},
//   method2() {},
// };

// myObject.property1 = newValue;

const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic",
};

pen.color = "red";
pen.price = "2.5";
console.log(`My pen costs ${pen.price}`);
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
};

console.log(
  `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`
);
aurora.health -= 20;
aurora.strength += 10;
console.log(
  `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`
);

// cleaner version of aurora

const aurora2 = {
  name: "Aurora",
  health: 150,
  stength: 25,
};

function describe(character) {
  return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}

console.log(describe(aurora2));

// or even better

const aurora3 = {
  name: "Aurora",
  health: 150,
  stength: 25,

  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
  },
};

console.log(aurora3.describe());
