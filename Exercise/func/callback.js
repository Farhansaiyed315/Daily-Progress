
// 25. Write a function that accepts a callback and executes it.

function doSomething(callback) {
    console.log("Doing some work...");
    callback(); // Execute the callback function
}

// Define a callback function
function sayHello() {
    console.log("Hello from the callback!");
}

// Call the function with the callback
doSomething(sayHello);


//? Arrow function. 
doSomething(() => {
    console.log("Hey! I'm an arrow function callback!");
});


//! 26. Write a function that takes two numbers and a callback to perform an operation.

function calculate(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

// Example callback functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Usage
console.log(calculate(5, 3, add));       // Output: 8
console.log(calculate(5, 3, multiply));  // Output: 15


//? Arrow function. 

console.log(calculate(10, 2, (a, b) => a - b)); // Output: 8


//! 27. Create a function that filters even numbers using a callback.

function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
}

// Callback to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNums = filterNumbers(nums, isEven);

console.log(evenNums); // Output: [2, 4, 6, 8]



//? Arrow function. 
const evenNums2 = filterNumbers(nums, (num) => num % 2 === 0);
console.log(evenNums2); // Output: [2, 4, 6, 8]
