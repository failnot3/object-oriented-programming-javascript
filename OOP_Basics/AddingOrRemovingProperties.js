function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

// user.token = 'asdasdas';

// Let's add new property to Circle with a dot notation
circle.location = { x: 1 };
// Now we have two properties radius and location
//======================
// Another way to write that is with the help of bracket notation:
circle["location"] = { x: 2 };

// or for example we can do this:
const propertyName = "location";
circle[propertyName] = { x: 3 };

// we can also "delete" a property

delete circle.location; //or we can use: delete circle["location"]
