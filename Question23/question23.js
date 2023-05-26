// 23. Write a program to check that the number given by the user is a prime number or not.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Get user input
const userInput = prompt("Enter a number:");

// Convert the input to a number
const number = parseInt(userInput);

// Check if the number is prime
if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}
