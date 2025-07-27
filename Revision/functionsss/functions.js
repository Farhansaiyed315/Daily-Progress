

//! 1. Create a function to add two numbers.

function addNumbers(a , b){
    return a + b;
}

const result = addNumbers(3 , 9);
console.log(`The sum of this two numbers are ${result}`);












//! 2. Create a function that checks square of a number. 

function numSquare(num){
    console.log(num*num);

}

numSquare(3);

















//! Create a function that takes a string and and returns it`s lenght

function strlent(){
    str =    "Farhan" 
    
    console.log("The lenght of string is ", str.length)
}

strlent();










//! create a function that converts celcius to Farenheit. 

function celcius (celcius){

    return (celcius * 9/5) + 32;

}

const celcitemp = 1;

const tempFaren = celcius(celcitemp);

console.log(`${ celcitemp} celcius  is eq to ${ tempFaren } fareheinheint`);

















//!  6. Write a function that takes a name and prints "Hello, [name]!"

function greet(name){
    console.log("Hello , " + name + "!");
}

greet("Farhan");


















//! 7. Write a function that calculates the factorial of a number


function factorial (n){
    if (n < 0 ) return "Factorial not defined for negative integers. "

    let result = 1 ; 
    for (let i = 2 ; i <= n; i++){
        result *= i;
    }

    return result ; 
}
console.log(" The factorial of the number is = ", factorial(4));










//? Using Recursion (cool and interview-friendly):


function factorial (n){
     if (n == 0 || n == 1){
        return 1 ; 
     }
     return n * factorial(n - 1 )



    }

console.log(" The faactiorial of given number " , factorial(5))












//! 8. Create a function that reverses a string.

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log( "The reversed string is " , reverse("Farhan"));

















//!  9. Create a function to check whether a number is prime or not.


function isPrime(num){
    if (num <= 1) return `${num} is not a prime number `;

    for ( let i = 2 ; i<= Math.sqrt(num); i++){
        if (num % i === 0){
            return `${num} is not a prime number. `
        }
    }

    return  `${num} is a prime number` ; 
}

console.log(isPrime(4))




