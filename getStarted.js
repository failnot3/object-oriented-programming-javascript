// JavaScript Encapsulation
// OOPs restrict direct access to its methods and variables by encapsulating the code and data together.
// In javascript, the data binds with the functions acting on that data in the process of achieving encapsulation in order to control the data and validate it.

// There are two ways of encapsulation in Javascript:

// Making data members private using var keyword.
// Set the data using setter methods and get that data using getter methods.
// We can manage read and write access of object’s properties by using encapsulation!

// The usual way:
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// The OOP way:

let emplotee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
emplotee.getWage();
