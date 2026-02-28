const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide};

function startCalculator() {

  let num1 = Number(prompt("Enter first number:"));
  let operator = prompt("Enter operator (+, -, *, /):");
  let num2 = Number(prompt("Enter second number:"));

  let resultFunction = operations[operator];

 alert("Result: " + resultFunction(num1, num2));
}