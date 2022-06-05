function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const objKeys = Object.keys(circle);
console.log(objKeys);

// To check if it exists we can:
if ("radius" in circle) {
  console.log("Circle has radius");
}
