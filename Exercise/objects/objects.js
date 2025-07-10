//! 1. What is an object in JavaScript? Give an example.
 
//! 2. How do you create an object using object literal syntax?


const student = {
  name: "Farhan",
  age: 21,
  course: "BCA",
  isEnrolled: true
};

//! 3.  How do you access object properties using dot and bracket notation?


const student = {
  name: "Farhan",
  age: 21
};

console.log(student.name); 
console.log(student.age);  



//! 4. How can you add, update, and delete a property in an object?
const student = {
  name: "Farhan",
  age: 21
};

// Add new property
student.course = "BCA";             // Dot notation
student["isEnrolled"] = true;      // Bracket notation

console.log(student);

{
  name: "Farhan",
  age: 21,
  course: "BCA",
  isEnrolled: true
}



student.age = 22;           // Update using dot
student["course"] = "MCA";  // Update using bracket

console.log(student.age);   
console.log(student.course); 


delete student.isEnrolled;
console.log(student);

{
  name: "Farhan",
  age: 22,
  course: "MCA"
}



//! 5. How do you loop through all properties of an object?

const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}



//! 6. Write a function that takes an object and logs all keys and values.

//! 6. Write a function that takes an object and logs all keys and values.

function logObjectDetails(obj) {
  for (const key in obj) {
    console.log(`Key = ${key}, Value = ${obj[key]}`);
  }
}

const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

logObjectDetails(student);





//! 7. What is the difference between Object.keys(), Object.values(), and Object.entries()?

const user = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

// Object.keys() => array of keys
console.log("🔑 Keys:");
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "course"]

// Object.values() => array of values
console.log("\n📦 Values:");
const values = Object.values(user);
console.log(values); // ["Farhan", 21, "BCA"]

// Object.entries() => array of [key, value] pairs
console.log("\n🧾 Entries:");
const entries = Object.entries(user);
console.log(entries); // [["name", "Farhan"], ["age", 21], ["course", "BCA"]]

// Loop through entries (best for logging both key and value)
console.log("\n🔁 Looping through entries:");
entries.forEach(([key, value]) => {
  console.log(`${key} = ${value}`);
});



//! 8. Create an object 'student' with 'name', 'age', and 'marks'. Log 'name' using bracket notation.

const student = {
  name: "Farhan Saiyed",
  age: 21,
  marks: 88
};


console.log("Student Name:", student["name"]); 



//! 9. What happens if you access a property that doesn’t exist on an object?

// output will be undefined. 


//! 10. What is a nested object? Create an example.


const student = {
  name: "Farhan Saiyed",
  age: 21,
  address: {
    street: "MiG Road",
    city: "Mumbai",
    pincode: 400070
  }
};


console.log(student.address.city);    
console.log(student["address"]["pincode"]); 
