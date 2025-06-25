//! Print even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


//! Print numbers from 10 to 1 (reverse).
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


//! Print the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum is:", sum);



//! Print multiplication table of 5 (like 5 x 1 = 5 ... till 10).
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


//! Print the factorial of a number (e.g., 5! = 120).
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`Factorial of ${num} is: ${fact}`);


//! Print all prime numbers between 1 and 100 using loops.
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  // check divisibility from 2 to num - 1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//! Check if a string is a palindrome using a loop (no built-in reverse).
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // mismatch found
    }
  }
  return true; // all matched
}

// Example usage
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false


//!  (Using Built-in reverse())
function isPalindrome(str) {
  // Step 1: Clean the string (remove spaces and make lowercase)
  str = str.toLowerCase().replace(/\s+/g, '');

  // Step 2: Reverse the string
  let reversed = str.split('').reverse().join('');

  // Step 3: Compare original and reversed
  return str === reversed;
}

// Test cases
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("Racecar"));   // true
console.log(isPalindrome("Was it a car or a cat I saw")); // true