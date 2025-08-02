
// ----------------------------------------
// 1. VARIABLES (let, const, var)
// ----------------------------------------
let name = "Farhan";        // Can be changed
const age = 22;             // Constant, can't be changed
var city = "Mumbai";        // Old way (avoid in modern JS)

console.log(name, age, city);

// ----------------------------------------
// 2. DATA TYPES
// ----------------------------------------
let isStudent = true;       // Boolean
let score = 95.5;           // Number
let message = "Hello JS!";  // String
let nothing = null;         // Null
let notDefined;             // Undefined

console.log(typeof score, typeof message);

// ----------------------------------------
// 3. OPERATORS
// ----------------------------------------
let x = 10;
let y = 3;

console.log(x + y); // Add
console.log(x - y); // Subtract
console.log(x * y); // Multiply
console.log(x / y); // Divide
console.log(x % y); // Remainder
console.log(x ** y); // Power

// ----------------------------------------
// 4. CONDITIONAL STATEMENTS
// ----------------------------------------
if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater or equal");
}

// Ternary operator
let result = x > y ? "x wins" : "y wins";
console.log(result);

// ----------------------------------------
// 5. LOOPS
// ----------------------------------------
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

let count = 1;
while (count <= 3) {
  console.log("While loop:", count);
  count++;
}

// ----------------------------------------
// 6. FUNCTIONS
// ----------------------------------------
function greet(user) {
  return `Hi, ${user}!`;
}
console.log(greet("Farhan"));

// Arrow function
const square = (num) => num * num;
console.log(square(4));

// ----------------------------------------
// 7. ARRAYS
// ----------------------------------------
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]); // Banana
fruits.push("Mango");
console.log(fruits);

// ----------------------------------------
// 8. OBJECTS
// ----------------------------------------
let student = {
  name: "Farhan",
  age: 22,
  course: "BCA",
  greet: function () {
    return `Hello, I’m ${this.name}`;
  },
};

console.log(student.greet());

// ----------------------------------------
// 9. NULL & UNDEFINED
// ----------------------------------------
let a = null;
let b; // undefined
console.log(a, b);

// ----------------------------------------
// 10. TYPE CONVERSION
// ----------------------------------------
let str = "5";
let num = Number(str); // "5" => 5
console.log(num + 10); // 15
