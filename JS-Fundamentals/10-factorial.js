#!/usr/bin/node

// Get the first argument and cast it to an integer
let num = parseInt(process.argv[2]);

// Define the recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Print the result
console.log(factorial(num));
