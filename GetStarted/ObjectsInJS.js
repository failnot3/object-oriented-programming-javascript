//Object Literral syntax

const circle = {
  // Inside here we have properties - they hold value
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  // if a dunction is inside here we call it a method - methods hold logic
  draw: function () {
    console.log("draw!");
  },
};

circle.draw();

// ----------------------------------------------------------
// Factory Function
function createCircle() {
  return {
    // Inside here we have properties - they hold value
    radius,
    // radius: 1,
    // location: {
    //   x: 1,
    //   y: 1,
    // },
    draw: function () {
      console.log("draw!");
    },
  };
}
const circleCreate = createCircle(1);

// Constructor function
function Circle(radius) {
  console.log("this", this);
  //this is a reference !
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
