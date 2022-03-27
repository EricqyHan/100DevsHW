function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  (this.computeOptimumLocation = function () {
    //
  }),
    (this.draw = function () {
      console.log("draw");
    });
}

// abstraction is hiding details

const circle = new Circle(10);
// circle.defaultLocation = false;
circle.computeOptimumLocation(0.1);
circle.draw();
