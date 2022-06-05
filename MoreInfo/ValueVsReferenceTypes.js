// Value / primitive Types:

// * Number
// * String
// * Boolean
// * Symbol
// * undefined
// * null

// Reference Types:

// * Object
// * Function
// * Array

//Primitive type
let x = 10;
let y = x;
x = 20;

//Reference type
let x1 = { value: 10 };
let y1 = x1;
x1.value = 20;

// Another example for primitive / value type
let number = 10;
function increase(number) {
  // This number is local to this function
  number++;
}

increase(number);
console.log("====================================");
console.log(number);
console.log("====================================");

// Another example for Reference type
let numberOne = { valueOne: 10 };
function increase(numberOne) {
  // This numberOne is local to this function
  numberOne.valueOne++;
}

increase(numberOne);
console.log("====================================");
console.log(numberOne);
console.log("====================================");
