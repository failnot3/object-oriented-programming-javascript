// Getters and setters

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

// One way to access it - is like this:
circle.getDefaultLocation();

// Getters and setters - variant two:

function CircleOne(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };

  this.draw = function () {
    console.log("draw");
  };
  // We declare a READ ONLY property
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
  });
}
const circleOne = new CircleOne(10);
circleOne.defaultLocation;
