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



//! 11. What is the difference between reference and value in the context of objects?     


//!  Primitive types => Passed by VALUE (copied)
//! Objects/Arrays/Functions => Passed by REFERENCE (shared)
//! Use spread operator or Object.assign() to clone and avoid reference issues



//! Primitive types are stored and copied by value

let a = 10;
let b = a; 

b = 20;

console.log(a); 
console.log(b); 

//! 🔹 Primitive types include: number, string, boolean, null, undefined, symbol, bigint

//! Reference (Non-Primitive Types like Objects, Arrays, Functions)

//! Non-primitive types are stored and copied by reference (memory address)

let obj1 = { name: "Farhan" };
let obj2 = obj1;

obj2.name = "Engineer";

console.log(obj1.name); 

//! 🔹 obj1 and obj2 are referencing the same object

//! Avoiding reference issue - clone the object (shallow copy)

//! Using spread operator
let original = { age: 21 };
let copy = { ...original };  

copy.age = 30;

console.log(original.age); 

console.log(copy.age);    



//! 12. Explain shallow copy vs deep copy with objects. How do you perform both?

//!  Shallow Copy:
//! Copies only the first level of an object.
//! Nested objects are still referenced (not copied).

let user1 = {
  name: "Farhan",
  address: {
    city: "Mumbai",
  },
};

//! Shallow copy using spread operator
let user2 = { ...user1 };

user2.name = "Engineer";       // changes only in user2 
user2.address.city = "Delhi";  // changes in both 

console.log(user1.name);        // Farhan  (not affected)
console.log(user1.address.city); // Delhi  (affected due to shallow copy)

//!  So, user2.address is still referencing the same object as user1.address

//!  Deep Copy:
//! Copies everything including nested objects (a full clone, not just top level)

//! Method 1: Using JSON.parse(JSON.stringify())
let user3 = JSON.parse(JSON.stringify(user1));

user3.address.city = "Hyderabad";

console.log(user1.address.city); // Delhi (not affected)
console.log(user3.address.city); // Hyderabad  (changed only in deep copy)

//  Limitations of JSON method:
// - Doesn't work with functions, Dates, undefined, Symbols

//! Method 2: Using structuredClone() (modern JS)
let user4 = structuredClone(user1);

user4.address.city = "Pune";

console.log(user1.address.city); // Delhi 
console.log(user4.address.city); // Pune 

//!  Summary:
// - Shallow Copy: one level copied, nested objects are shared (spread, Object.assign)
// - Deep Copy: full clone, nested objects are also copied (JSON.parse + stringify or structuredClone)

//  Use structuredClone() if supported, else use libraries like lodash's cloneDeep()



//! 13. What is the purpose of 'this' keyword inside an object method?

//! Purpose:
//! The `this` keyword refers to the **object that is calling the method**.
//! It's used to access properties and methods of the same object from inside its method.

let student = {
  name: "Farhan",
  age: 21,
  
  //! Method using `this`
  greet: function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

student.greet(); // Output: Hello, my name is Farhan and I am 21 years old.

//  Explanation:
// - `this.name` refers to student.name
// - `this.age` refers to student.age

//  Without `this`, you'd need to hardcode or restructure the code.
// `this` makes it dynamic and reusable inside the object.





//! 14. What is object destructuring?
//! Object destructuring is a short and clean way to extract properties from an object
//! and assign them to variables using a special syntax.

//!  Example: Extract 'name' and 'email' from the object

const user = { 
  name: 'Farhan', 
  email: 'farhan@example.com' 
};

//! Destructuring syntax:
const { name, email } = user;

console.log(name);  // Output: Farhan
console.log(email); // Output: farhan@example.com

//!  This avoids writing: 
//! const name = user.name;
//! const email = user.email;

//   Summary:
//   Destructuring makes code shorter and cleaner
//  You can directly pull values from objects into variables



//! 15. How do you merge two objects in JavaScript?

//! ✅ You can merge two objects using:
//! 1️⃣ Spread operator (...)  🔥
//! 2️⃣ Object.assign() method

const obj1 = { name: "Farhan" };
const obj2 = { age: 21 };

//! 🔹 Method 1: Using Spread Operator (Modern & Easy)
const merged1 = { ...obj1, ...obj2 };

console.log(merged1); // Output: { name: "Farhan", age: 21 }

//! 🔹 Method 2: Using Object.assign()
const merged2 = Object.assign({}, obj1, obj2);

console.log(merged2); // Output: { name: "Farhan", age: 21 }

//! 🔥 If both objects have the same key, the value from the second object will overwrite

const obj3 = { name: "Farhan" };
const obj4 = { name: "Engineer", city: "Mumbai" };

const merged3 = { ...obj3, ...obj4 };

console.log(merged3); // Output: { name: "Engineer", city: "Mumbai" }

// Summary:
// - Use spread operator for cleaner modern syntax
// - Object.assign() works in older JS versions
// - Later keys overwrite earlier ones if they conflict



//! 16. Write a function that counts how many keys are in a given object.

function countKeys(obj) {
  // Object.keys(obj) returns an array of all keys
  // .length gives the total number of keys
  return Object.keys(obj).length;
}

// Example usage:
const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

console.log(countKeys(student)); // Output: 3


//! 17. Explain the difference between for...in and Object.keys().forEach() when looping objects.

//! ✅ for...in loop:
//! - Loops over all **enumerable properties**, including inherited ones (from the prototype chain)
//! - ⚠️ You need to manually check if the key is the object's own property

const student = {
  name: "Farhan",
  age: 21
};

for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key + ":", student[key]);
  }
}
//! Output:
//! name: Farhan
//! age: 21

//! ✅ Object.keys().forEach():
//! - Loops only over the **own enumerable properties** of the object
//! - No need for hasOwnProperty check

Object.keys(student).forEach((key) => {
  console.log(key + ":", student[key]);
});
//! Output:
//! name: Farhan
//! age: 21

//! ✅ Key Differences:
//! | Feature                    | for...in                      | Object.keys().forEach()       |
//! |----------------------------|-------------------------------|-------------------------------|
//! | Own properties only        | ❌ (needs manual check)        | ✅ (by default)                |
//! | Inherited properties       |




//! 18. What happens if two keys in an object are the same? What value is stored?

//!  If two keys in an object are the same, the **last one overwrites the previous one**
//! - JavaScript objects can't have duplicate keys
//! - The latest key-value pair wins during object creation

const user = {
  name: "Farhan",
  name: "Engineer"
};

console.log(user.name); // Output: "Engineer"

//!  Explanation:
//! - The first key `name: "Farhan"` is overwritten by `name: "Engineer"`
//! - Only the last value assigned to that key is stored in memory

//!  Summary:
//! - Duplicate keys are not allowed in objects
//! - If written, the last one will overwrite previous ones
//! - Always make sure keys are unique to avoid data loss







