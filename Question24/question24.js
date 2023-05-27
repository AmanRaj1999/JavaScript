// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
// Initialize empty arrays
let even = [];
let odd = [];

// Iterate through numbers from 0 to 100 (inclusive)
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even.push(i); // If the number is even, add it to the 'even' array
  } else {
    odd.push(i); // If the number is odd, add it to the 'odd' array
  }
}

// Print the arrays
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
