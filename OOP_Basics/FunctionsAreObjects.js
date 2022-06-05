function Circle(radius) {
  //   console.log("this", this);
  //this is a reference !
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
// If we don't use new it will use the GLOBAL this
const another = new Circle(1);
//In JS functions are OBJECTS!
Circle.call({}, 2);
Circle.apply({}, [2]);
