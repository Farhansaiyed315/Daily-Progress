
// //! 1. What is an object in JavaScript? Give an example.


// //! 2. How do you create an object using object literal syntax?

// const student = {
//     name: "Farhan",
//     age:22,
//     course: "BCA"
//     // isEnroll: true
// };



// //! 3.  How do you access object properties using dot and bracket notation?



// console.log(student.name)
// console.log(student.age)



// //! 4. How can you add, update, and delete a property in an object?



// const student = {
//     name: "Farhan",
//     age:22,
    
// };


// // Add new property. 

// student.course = "Bca";
// student["isEnroll"] = true;

// console.log(student);


// // update using dot notation 

// student.age = 33;
// student["course"] = "MCA";

// console.log(student.age)
// console.log(student.course)






//! 5. How do you loop through all properties of an object?




// const student = {
//   name: "Farhan",
//   age: 21,
//   course: "BCA"
// };


// for (let key in student) {
//     console.log(key + ":", student[key]);
// }




//! 6. Write a function that takes an object and logs all keys and values.

// for(const key in student){
//     console.log(`kay = ${key} and value =  ${student[key]}`);
// }




//! 7. What is the difference between Object.keys(), Object.values(), and Object.entries()?


// ---
// ---------
// -------------
// ------------------
// -------------------------
// ---------------------------------
// ----------------------------------------
// --------------------------------------------
// ---------------------------------------------------
// ------------------------------------------------------------




//! 8. Create an object 'student' with 'name', 'age', and 'marks'. Log 'name' using bracket notation.


// console.log("the name is",student["name"]);





//! 9. What happens if you access a property that doesn’t exist on an object?

// output will be undefined. 



//! 10. What is a nested object? Create an example.



// const student = {
//   name: "Farhan",
//   age: 21,
//   course: "BCA",
//   address:{
//     street: "MIG COLONY",
//      phone: 8001902596,
//      no: 123456789
//   }
// };


// console.log(student.address.street);
// console.log(student["address"]["phone"]);







//! 11. What is the difference between reference and value in the context of objects?     


//?  Primitive types => Passed by VALUE (copied)
//? Objects/Arrays/Functions => Passed by REFERENCE (shared)
//? Use spread operator or Object.assign() to clone and avoid reference issues



//? Primitive types are stored and copied by value

// let a = 10;
// let b = a; 

// b = 20;


// console.log(a); 
// console.log(b); 




//?  Primitive types include: number, string, boolean, null, undefined, symbol, bigint

//? Reference (Non-Primitive Types like Objects, Arrays, Functions)

//? Non-primitive types are stored and copied by reference (memory address)




// let obj1 = { name: "Farhan" };
// let obj2 = obj1;

// obj2.name = "Engineer";

// console.log("the changed name is",obj1.name);



//? obj1 and obj2 are referencing the same object



//? Avoiding reference issue - clone the object (shallow copy)

//? Using spread operator
// let original = { age: 21 };
// let copy = { ...original };  

// copy.age = 30;

// console.log("The original age is",original.age); 

// console.log("the copied age is",copy.age);



//! 12. Explain shallow copy vs deep copy with objects. How do you perform both?


//?  Shallow Copy:
//? Copies only the first level of an object.
//? Nested objects are still referenced (not copied).



//?  Deep Copy:
//? Copies everything including nested objects (a full clone, not just top level)




// let user1 = {
//     name: "Farhan",
//     address: {
//         city: "Mumbai",
//     },
// };

//? Shallow copy using spread operator.
// let user2 = {...user1};


// user2.name = "Engineer";  //   (not affected)
// user2.address.city = "Delhi";       //    (affected due to shallow copy)


// console.log(user1.name);
// console.log(user1.address.city);




//?  So, user2.address is still referencing the same object as user1.address

//?  Deep Copy:
//? Copies everything including nested objects (a full clone, not just top level)





//! 13. What is the purpose of 'this' keyword inside an object method?

//! Purpose:
//? The `this` keyword refers to the **object that is calling the method**.
//? It's used to access properties and methods of the same object from inside its method.
//? 
//? It's used to access properties and methods of the same object from inside its method.



let student = {
    name: "Farhan",
    age: 21,

    //! Method using `this`
    greet: function(){
        console.log("Helllo my name is " + this.name + " and I am " + this.age + "years old.");
    }
}
student.greet();



//?  Explanation:
//? - `this.name` refers to student.name
//? - `this.age` refers to student.age

//?  Without `this`, you'd need to hardcode or restructure the code.
//? `this` makes it dynamic and reusable inside the object.