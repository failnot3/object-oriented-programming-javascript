// Abstraction means - Hide the details and only show the essentials

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };
  let computeOptimumLocation = function (factor) {
    // ...
  };
  this.draw = function () {
    // Closure:
    // A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
    // In other words, a closure gives you access to an outer function's scope from an inner function.
    // In JavaScript, closures are created every time a function is created, at function creation time.
    computeOptimumLocation(0.1);

    //defaultLocation

    console.log("draw");
  };
}
const circle = new Circle(10);
