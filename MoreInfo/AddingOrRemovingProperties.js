function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

// user.token = 'asdasdas';

// Let's add new property to Circle
circle.location = { x: 1 };
// Now we have two properies radius and location
