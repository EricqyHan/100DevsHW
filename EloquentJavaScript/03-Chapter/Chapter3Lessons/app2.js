// Nested Scope
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

// Declaration Notation
console.log("The future say: ", future());

function future() {
  return "You'll never have flying cars";
}

// Arrow Functions

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(3, 4));

const square1 = (x) => {
  return x * x;
};

const square2 = (x) => x * x;
console.log(square2(3));

// When arrow function has no parameters
const horn = () => {
  console.log("Toot");
};
