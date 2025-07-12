
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




const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};


for (let key in student) {
    console.log(key + ":", student[key]);
}

