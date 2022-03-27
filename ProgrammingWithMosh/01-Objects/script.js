//
// This is a object literal
// const circle = {
//   // key: value
//   radius: 1,
//   // value can be an object
//   location: {
//     x: 1,
//     y: 1,
//   },
//   //   value is a function
//   draw: function () {
//     console.log("draw");
//   },
// };

// This circle has three memebers
// If a Object has a function then it is called a method
// If a objecct has more than one method, then we say it has behavior
// An example of a factory

// factory function
function createCircle(radius) {
  return {
    //   if key and value are the same we can drip the value
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();
