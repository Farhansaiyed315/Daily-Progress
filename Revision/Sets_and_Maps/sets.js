


//! 1. What is a Set in JavaScript and how is it different from an array?

//? A Set is a built-in JavaScript object that allows you to store **unique values** only.
//? This means it automatically removes duplicates.



// Example of a Set:

// Example of a Set:
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); 
console.log(" Duplicate, will be ignored",mySet); 





//? Difference between Set and Array:
//?- Array can have duplicate values, Set cannot.
//? - Set has no index, Array uses index to access items.
//? - Set has faster lookup for unique values.
//?  - Set uses methods like add(), delete(), has(), while Array uses push(), pop(), indexOf(), etc.

// //? Example of Array:
// const myArray = [1, 2, 2];
// console.log(myArray); 



