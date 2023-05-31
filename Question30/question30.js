// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

// Function to perform addition
function add(num1, num2) {
  return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

// Prompt the user for input
const operation = prompt(
  "Choose an operation: 1 - Addition, 2 - Subtraction, 3 - Multiplication, 4 - Division"
);
const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));

let result;
// Perform the selected operation
switch (operation) {
  case "1":
    result = add(number1, number2);
    console.log("The result of addition is: " + result);
    break;
  case "2":
    result = subtract(number1, number2);
    console.log("The result of subtraction is: " + result);
    break;
  case "3":
    result = multiply(number1, number2);
    console.log("The result of multiplication is: " + result);
    break;
  case "4":
    result = divide(number1, number2);
    console.log("The result of division is: " + result);
    break;
  default:
    console.log("Invalid operation");
}
