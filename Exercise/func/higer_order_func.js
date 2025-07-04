
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


// 15. Write an arrow function that returns the remainder of two numbers.
const getremainder = (a,b) => a%b
console.log("The remainder is ", getremainder(5,2))