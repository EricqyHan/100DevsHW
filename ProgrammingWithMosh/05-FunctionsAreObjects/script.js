function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`draw`);
  };
}

Circle.call({}, 1, 2, 3, 4);

const another = new Circle(1);
