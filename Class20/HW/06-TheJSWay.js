// Create Your First Objects
const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic",
};

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

// modifying a pen object
pen.color = "red";
// red pen
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,

  // return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strengths and ${this.xp} as xp points`;
  },
};

console.log(
  `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`
);

aurora.health -= 20;

aurora.strength += 10;

console.log(
  `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`
);

console.log(aurora.describe());

console.log(Math.PI);
console.log(Math.floor(Math.random() * 100) + 1);

aurora.health -= 20;
aurora.strength += 10;
aurora.xp = 0;
aurora.xp += 25;
console.log(aurora.describe());
console.log(aurora);

const dog = {
  name: "Brian",
  species: "Husky",
  size: "20 pounds",

  describe() {
    return `${dog.name} is a ${dog.species} dog measuring ${dog.size}`;
  },

  bark() {
    return `Grr! Grr!`;
  },
};

console.log(dog.describe());
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
//const r = Number(prompt("Enter the circle radius: "));

/*
const circle = {
  radius: r,
  area: Math.PI * r ** 2,
  circumference: 2 * Math.PI * r,

  circumferenceOfCircle() {
    return `It's circumference is ${this.circumference}`;
  },
  areaOfCircle() {
    return `It's area is ${this.area}`;
  },
};
*/

// Modeling a bank account
const bankAccount = {
  name: "Alex",
  balance: 0,
  credit(x) {
    this.balance += x;
    // return `owner: ${this.name}, ${this.balance}`;
  },
  describe() {
    return `owner: ${this.name}, ${this.balance}`;
  },
};

console.log(bankAccount.credit(250));
console.log(bankAccount.describe());
console.log(bankAccount.credit(-80));
console.log(bankAccount.describe());
