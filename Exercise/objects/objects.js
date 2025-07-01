//! 1. What is an object in JavaScript? Give an example.
 
//! 2. How do you create an object using object literal syntax?
// const student = {
//   name: "Farhan",
//   age: 21,
//   course: "BCA",
//   isEnrolled: true
// };

//! 3.  How do you access object properties using dot and bracket notation?
// const student = {
//   name: "Farhan",
//   age: 21
// };

// console.log(student.name); // Output: Farhan
// console.log(student.age);  // Output: 21



//! 4. How can you add, update, and delete a property in an object?
// const student = {
//   name: "Farhan",
//   age: 21
// };

// // Add new property
// student.course = "BCA";             // Dot notation
// student["isEnrolled"] = true;      // Bracket notation

// console.log(student);
// 
// {
//   name: "Farhan",
//   age: 21,
//   course: "BCA",
//   isEnrolled: true
// }



// student.age = 22;           // Update using dot
// student["course"] = "MCA";  // Update using bracket

// console.log(student.age);   // 22
// console.log(student.course); // MCA


// delete student.isEnrolled;
// console.log(student);
/*
{
  name: "Farhan",
  age: 22,
  course: "MCA"
}
*/


//! 5. How do you loop through all properties of an object?

const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}