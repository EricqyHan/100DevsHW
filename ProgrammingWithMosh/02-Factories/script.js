//
// This is a object literal
const circle = {
  // key: value
  radius: 1,
  // value can be an object
  location: {
    x: 1,
    y: 1,
  },
  //   value is a function
  draw: function () {
    console.log("draw");
  },
};

// This circle has three memebers
// If a Object has a function then it is called a method

circle.draw();
