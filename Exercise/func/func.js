
//! Create a function to add two numbers

function addNumbers(a, b) {
    return a + b
}

const result = addNumbers(4, 6);
console.log("The sum is", result)

//! create a function that return a square of a number. 

function squarenum(num) {
    return num * num
}
const square = squarenum(5);
console.log("The square of a given number is ", square)

// //? With arrow function

// const squarenum = (num) => num * num ;
// console.log ("The square of the given number is ", squarenum(5))


//!  Write a function that checks if a number is even or odd.


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your number to check if its even or odd : ", function(input) {
  const numbers = Number(input);

  if (numbers%2===0) {
 console.log(numbers,"is an even number")
}
else
{
    console.log(numbers,"is an odd number")
}
  rl.close(); // Close the input after getting the answer
});


//!  4. Create a function that takes a string and returns its length.

function  strlent(){
    str = "farhan"
console.log("\nThe length of the string is",str.length);
}
strlent();

//! 5. Create a function that converts Celsius to Fahrenheit.


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const tempInCelsius = 1;
const tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);

console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`);
