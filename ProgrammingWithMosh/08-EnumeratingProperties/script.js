function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  // every iteration key will hold the value
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log(`circle has a radius`);
