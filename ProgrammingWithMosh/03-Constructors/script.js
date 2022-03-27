// This is a object literal
const circle = {
  // key: value
  radius: 1,
  // value can be an object
  //   value is a function
  draw: function () {
    console.log("draw");
  },
};

// This circle has three memebers
// If a Object has a function then it is called a method

function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log(`Draw`);
  };
}

const another = new Circle(1);
