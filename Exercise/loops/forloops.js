//! Print even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


//! Print numbers from 10 to 1 (reverse).
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


//! Print the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum is:", sum);



//! Print multiplication table of 5 (like 5 x 1 = 5 ... till 10).
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


//! Print the factorial of a number (e.g., 5! = 120).
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`Factorial of ${num} is: ${fact}`);


//! Print all prime numbers between 1 and 100 using loops.
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  // check divisibility from 2 to num - 1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//! Check if a string is a palindrome using a loop (no built-in reverse).
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // mismatch found
    }
  }
  return true; // all matched
}

// Example usage
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false


//!  (Using Built-in reverse())
function isPalindrome(str) {
  // Step 1: Clean the string (remove spaces and make lowercase)
  str = str.toLowerCase().replace(/\s+/g, '');

  // Step 2: Reverse the string
  let reversed = str.split('').reverse().join('');

  // Step 3: Compare original and reversed
  return str === reversed;
}

// Test cases
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("Racecar"));   // true
console.log(isPalindrome("Was it a car or a cat I saw")); // true






//? ----------------  FOR OF LOOP  ------------------------------------------------ 

//! Q1: Use a for...of loop to print each character in the string "Hello World"

const message = "Hello World";

for (const char of message) {
  console.log(char);
}




//! Q2: Given an array of numbers [10, 20, 30, 40], use a for...of loop to print each number

const numbers = [10, 20, 30, 40];

for (const num of numbers) {
  console.log(num);
}




//! Q3: Use a for...of loop to calculate the sum of all elements in the array [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log("Sum:", sum);






//! Q4: Create a for...of loop to iterate over an array of fruits ["apple", "banana", "mango"] and print each fruit in uppercase.

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}






//! Q5: Given a string "JavaScript", use a for...of loop to count how many vowels are in the string.

const str = "JavaScript";
let vowelCount = 0;

for (const char of str) {
  if ("aeiouAEIOU".includes(char)) {
    vowelCount++;
  }
}

console.log("Number of vowels:", vowelCount);







//! Q6: Use a for...of loop to print all elements of a nested array: [[1, 2], [3, 4], [5, 6]] (Hint: use two for...of loops)

const nestedArray = [[1, 2], [3, 4], [5, 6]];

for (const innerArray of nestedArray) {
  for (const num of innerArray) {
    console.log(num);
  }
}





//! Q7: Given an array of student names ["Ali", "Sara", "John"], use a for...of loop to print a welcome message for each student.

const students = ["Ali", "Sara", "John"];

for (const student of students) {
  console.log(`Welcome, ${student}!`);
}







//! Q8: Create an array of prices [100, 200, 300], then use a for...of loop to apply a 10% discount and print the discounted prices.

const prices = [100, 200, 300];

for (const price of prices) {
  const discountedPrice = price - price * 0.1; // 10% discount
  console.log(`Discounted Price: ₹${discountedPrice}`);
}





//! Q9: Use a for...of loop to iterate over the string "for...of loop" and print each character except spaces.

const text = "for...of loop";

for (const char of text) {
  if (char !== " ") {
    console.log(char);
  }
}





//! Q10: Given an array of boolean values [true, false, true], use a for...of loop to count how many `true` values are present.

const bools = [true, false, true];
let trueCount = 0;

for (const value of bools) {
  if (value === true) {
    trueCount++;
  }
}

console.log("Number of true values:", trueCount);









//? ----------------------------  FOR EACH LOOP  -----------------------------------


//! Q1: Use forEach to print each element in the array [1, 2, 3, 4, 5].

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num);
});






//! Q2: Given an array of names ["Farhan", "Ayaan", "Zoya"], use forEach to greet each person like "Hello, Farhan!".

const names = ["Farhan", "Ayaan", "Zoya"];

names.forEach(function(name) {
  console.log(`Hello, ${name}!`);
});





//! Q3: Use forEach to double each number in the array [10, 20, 30] and print the result.

const numbers = [10, 20, 30];

numbers.forEach(function(num) {
  console.log(num * 2);
});





//! Q4: Given an array of strings ["pen", "pencil", "eraser"], use forEach to print the length of each string.

const items = ["pen", "pencil", "eraser"];

items.forEach(function(item) {
  console.log(`${item} has length: ${item.length}`);
});






//! Q5: Use forEach to calculate the total sum of elements in the array [5, 10, 15, 20].

const numbers = [5, 10, 15, 20];
let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});

console.log("Total sum:", sum);








//! Q6: Given an array of marks [33, 48, 75, 62], use forEach to check and print whether each mark is "pass" (>= 35) or "fail".

const marks = [33, 48, 75, 62];

marks.forEach(function(mark) {
  if (mark >= 35) {
    console.log(`${mark} = Pass`);
  } else {
    console.log(`${mark} = Fail`);
  }
});








//! Q7: Use forEach to iterate over an array of objects: [{name: "Ali"}, {name: "Sara"}] and print each name.

const people = [{ name: "Ali" }, { name: "Sara" }];

people.forEach(function(person) {
  console.log(person.name);
});








//! Q8: Create an array of prices [100, 200, 300]. Use forEach to add ₹50 to each price and print the new price.

const prices = [100, 200, 300];

prices.forEach(function(price) {
  const newPrice = price + 50;
  console.log(`New Price: ₹${newPrice}`);
});










//! Q9: Use forEach to print the index and value of each element in the array ["a", "b", "c"].

const letters = ["a", "b", "c"];

letters.forEach(function(value, index) {
  console.log(`Index: ${index}, Value: ${value}`);
});







//! Q10: Given an array of tasks ["Eat", "Code", "Sleep"], use forEach to print each task in the format: "Task: Eat".

const tasks = ["Eat", "Code", "Sleep"];

tasks.forEach(function(task) {
  console.log(`Task: ${task}`);
});











//?--------------------- FOR IN LOOP ----------------------------------------------


//! Q1: Use a for...in loop to print all keys in the object {name: "Farhan", age: 21, city: "Mumbai"}.

const person = {
  name: "Farhan",
  age: 21,
  city: "Mumbai"
};

for (const key in person) {
  console.log(key);
}







//! Q2: Given an object {math: 80, english: 70, science: 90}, use for...in to print each subject and its marks.

const marks = {
  math: 80,
  english: 70,
  science: 90
};

for (const subject in marks) {
  console.log(`${subject}: ${marks[subject]}`);
}









//! Q3: Use a for...in loop to count how many properties are present in the object {a: 1, b: 2, c: 3}.

const obj = { a: 1, b: 2, c: 3 };
let count = 0;

for (const key in obj) {
  count++;
}

console.log("Total properties:", count);








//! Q4: Create a for...in loop to copy all properties from one object to another.

const source = {
  name: "Farhan",
  age: 21,
  city: "Mumbai"
};

const target = {};

for (const key in source) {
  target[key] = source[key];
}

console.log("Copied object:", target);







//! Q5: Given a nested object like {user: {name: "Ali", age: 22}}, use for...in to print the outer keys.

const data = {
  user: {
    name: "Ali",
    age: 22
  }
};

for (const key in data) {
  console.log(key);
}







//! Q6: Use for...in to print only the keys of an object, not the values.

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023
};

for (const key in car) {
  console.log(key);
}







//! Q7: Use a for...in loop to print both keys and values of the object {brand: "Nike", price: 5000, inStock: true}.

const product = {
  brand: "Nike",
  price: 5000,
  inStock: true
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}








//! Q8: Create an object with 5 items and use for...in to convert all string values to uppercase.

const user = {
  name: "farhan",
  city: "mumbai",
  profession: "developer",
  age: 22,
  country: "india"
};

for (const key in user) {
  if (typeof user[key] === "string") {
    user[key] = user[key].toUpperCase();
  }
}

console.log(user);







//! Q9: Use for...in to check if the object {x: 10, y: 20} contains a key named "z".

const obj = { x: 10, y: 20 };
let hasZ = false;

for (const key in obj) {
  if (key === "z") {
    hasZ = true;
    break;
  }
}

console.log("Contains key 'z'?", hasZ);









//! Q10: Given an object of a student with subjects and marks, use for...in to calculate total marks.

const studentMarks = {
  math: 85,
  english: 78,
  science: 92,
  history: 74,
  computer: 88
};

let total = 0;

for (const subject in studentMarks) {
  total += studentMarks[subject];
}

console.log("Total Marks:", total);

