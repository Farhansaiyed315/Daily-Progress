
//!  11. Create a function expression that returns the cube of a number.

//? jab function ko ek variable mein rakh dete hai usay hi functin expression kehte hai simple hai bikul chalo banate hai khud se function expression. 

const add = function (num) {
  return  num * num;
};
console.log("The square is: ", add(3)); 

//!  12. Create an arrow function that multiplies 3 numbers.

const multiplythreenum = (a,b,c) => a * b * c ;
console.log("The result is of multiplying the provided three numbers is", multiplythreenum(2,3,4));

//! 13. Use an arrow function inside setTimeout() to print "Hi" after 1 second.

setTimeout(() => {
  console.log("Hello Farhan jii 2 second baad");
},2000);

//! 14. Convert a normal function to arrow function that returns the square of a number

//! 15. Write an arrow function that returns the remainder of two numbers.
const getremainder = (a,b) => a%b
console.log("The remainder is ", getremainder(5,2))


//! 16. Write a function using default parameters.

function add(a = 0, b = 0) {
  console.log("Sum is", a + b);
}

add();           // → Sum is 0
add(5);          // → Sum is 5 (5 + 0)
add(5, 10);      // → Sum is 15


//! 17. Write a function that uses rest parameters to sum any number of values.

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log("Total sum:", total);
}

sumAll(1, 2, 3);             // Total sum: 6
sumAll(10, 20, 30, 40);      // Total sum: 100
sumAll();                    // Total sum: 0



//? Arrow function. 
const sumAll = (...nums) => nums.reduce((sum, val) => sum + val, 0);

console.log(sumAll(1, 2, 3));      
console.log(sumAll(100, 200));


//! 18. Write a function that accepts both numbers and strings and returns their types.

function checkTypes(...values) {
  for (let value of values) {
    console.log(`${value} → ${typeof value}`);
  }
}

checkTypes(42, "Farhan", "123", 100); 



//? Arrow function. 
const checkTypes = (...vals) => {
  vals.forEach(val => console.log(`${val} → ${typeof val}`));
};

checkTypes("hello", 99, "22", 3.14);


//! 19. Create a function that counts the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(`Vowel count: ${count}`);
}

countVowels("Farhan Saiyed");  // Output: Vowel count: 5


//? Arrow function. 
const countVowels = str => {
  const vowels = "aeiouAEIOU";
  return [...str].filter(char => vowels.includes(char)).length;
};

console.log(countVowels("Engineers are cool"));



//! 20. Write a function that takes an array and returns the sum of all numbers.

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}


console.log(sumArray([1, 2, 3, 4, 5]));  




//? Arrow function. 
const sumArray = arr => arr.reduce((total, num) => total + num, 0);

console.log(sumArray([10, 20, 30])); 





