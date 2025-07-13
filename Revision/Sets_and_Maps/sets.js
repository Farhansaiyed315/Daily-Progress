


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



//! 2. How do you create a new Set in JavaScript?

// You can create a new Set using the `Set` constructor.


// Method 1: Create an empty Set

const emptySet = new Set();
console.log(emptySet);


const numberSet = new Set([1,2,3,4,4,4,4,5,6,7]);
console.log("duplicate 4 will be removed",numberSet)


// can add values later using add()
numberSet.add(9);
console.log(numberSet);





//! 3. How do you add elements to a Set?

// already known 





//! 4. How do you remove elements from a Set?

// Use the `.delete()` method to remove a specific element from a Set.


const numbers = new Set([1,2,3,4,5,6,7])
numbers.delete(7)
console.log(numbers)
numbers.delete(10);
console.log("numbres does not exist so nothing wil happens",numbers)


//! 5. How do you check if a Set contains a certain value?


// Use the `.has()` method to check if a value exists in the Set


const colors = new Set(["red", "green", "blue"]);

console.log(colors.has("green")); 
console.log(colors.has("yellow")); 


//! 6. How can you find the size (number of elements) of a Set?



const languages = new Set(["JavaScript", "Python", "C++", "Java"]);

console.log(languages.size); 

languages.add("Java");  
console.log("duplicate, won't increase size",languages.size); 



//! 7. What happens if you add duplicate values to a Set?

// A Set only stores unique values.
// If you try to add a duplicate, it will be ignored — no error, no change.



//! 8. How can you loop through all the elements in a Set?


const animals = new Set(["dog","cat","elephant"]);

// Method 1: using for of loop

// for (const animal of animals){
//     console.log(animal)
// }


animals.forEach((animal) => {
    console.log(animal)
})





//! 9. How do you convert a Set to an array?

const setExample = new Set([1,2,3,4,5,6]);

// Method 1 using spread opreator
const array1 = [...setExample];
console.log(array1)


const array2 = Array = Array.from(setExample);
console.log(array2);





//! 10. How do you clear all elements from a Set?
// Use the `.clear()` method to remove all elements from a Set.

const cities = new Set(["Mumbai", "Delhi", "Pune"]);

console.log(cities.size); 

cities.clear(); 

console.log(cities.size); 
console.log(cities); 
