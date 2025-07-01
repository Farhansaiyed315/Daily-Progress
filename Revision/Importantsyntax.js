let arr = [1, 2, 3];     // Array
let obj = { name: "Farhan", age: 22 }; // Object


let name = "Farhan"
function greet(name) {
  return "Hello " + name;
}

console.log(greet(name))


// Arrow Functions. 
let myname = "Farhan Saiyed"
const greetArrow = (name) => "Hello " + myname;
console.log(greetArrow(myname))



// 🔹 5. Conditionals
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}



switch (day) {
  case "Mon":
    console.log("Work");
    break;
  case "Sun":
    console.log("Rest");
    break;
  default:
    console.log("Invalid");
}



// 🔹 6. Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 5);






// 🔹 7. Arrays
let fruits = ["apple", "banana"];
fruits.push("mango");      // Add
fruits.pop();              // Remove
console.log(fruits[0]);    // Access


fruits.forEach(f => console.log(f));
let upper = fruits.map(f => f.toUpperCase());
let filtered = fruits.filter(f => f !== "banana");




// 🔹 8. Objects
let person = {
  name: "Farhan",
  age: 22,
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(person.name);
person.city = "Mumbai";





// 🔹 9. DOM Basics
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("p");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Clicked!");
});



let msg = `Hi, my name is ${name}`; // Template string

let { name, age: myAge } = person; // Destructuring

let newArr = [...arr, 4, 5]; // Spread

function add(a = 1, b = 2) {
  return a + b;
}


// 🔹 12. try...catch
try {
  let res = riskyFunction();
} catch (error) {
  console.error("Error:", error);
}


// 🔹 13. Arrow Functions
const sumArrow = (a, b) => a + b;
const hello = () => console.log("Hi!");



// 🔹 14. Default Parameters
function greetUser(user = "Guest") {
  console.log(`Hello, ${user}`);
}


// 🔹 15. Rest & Spread
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}




// 🔹 16. Destructuring
const student = { name: "Ali", age: 21 };
const { name: studentName, age: studentAge } = student;

const [a, b] = [10, 20];




// 🔹 17. Classes
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  getDetails() {
    return `${this.name} is studying ${this.course}`;
  }
}

let s1 = new Student("Farhan", "BCA");
console.log(s1.getDetails());



// 🔹 18. Promises
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Success!");
  else reject("Failed");
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));



  
// 🔹 19. Async / Await
async function getData() {
  try {
    let res = await fetch("https://api.example.com");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
}


// 🔹 20. setTimeout / setInterval
setTimeout(() => {
  console.log("Runs after 2 sec");
}, 2000);

let interval = setInterval(() => {
  console.log("Every 1 sec");
}, 1000);

// Stop interval
clearInterval(interval);




// 🔹 28. this Keyword
const person1 = {
  name: "Farhan",
  greet() {
    console.log(this.name);
  }
};

person1.greet(); // Farhan

const greetCopy = person1.greet;
greetCopy(); // undefined




// 🔹 31. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Runs immediately!");
})();




// 🔹 30. Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
// Output: Start > End > Promise > Timeout

