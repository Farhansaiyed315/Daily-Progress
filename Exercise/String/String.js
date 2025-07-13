// ! 1. What is a string in JavaScript? How do you declare it?

let name1 = "Farhan";       // Double quotes
let name2 = 'Saiyed';       // Single quotes
let greeting = `Hello`;     // Backticks (template literal)





//! 2. What is the difference between single quotes (''), double quotes (""), and backticks (``)?

let name = "Farhan";
let message = `Hello, my name is ${name}!`;
console.log(message); // Output: Hello, my name is Farhan!





//! 3. How do you find the length of a string?

let name = "Farhan";
console.log(name.length);  

let name = "Farhan";

console.log(name[0]);  
console.log(name[1]);  
console.log(name[5]);  



//! 4. Write a program to take a string and print its first and last character.

let str = "JavaScript"; 

let firstChar = str[0]; 
let lastChar = str[str.length - 1]; 

console.log("First character:", firstChar);
console.log("Last character:", lastChar);



//! 5. How to access characters in a string using index?



// In JavaScript, you can access characters in a string using index numbers.
// Strings work like arrays, so you can use bracket notation to get characters.

// 🔹 Syntax:
let string = "Example";
console.log(string[0]); // First character
console.log(string[string.length - 1]); // Last character

//  Example:
let str = "JavaScript";

console.log(str[0]); // J (first character)
console.log(str[4]); // S (fifth character)
console.log(str[str.length - 1]); // t (last character)

//  Another Example:
let name = "Farhan";

console.log(name[0]); // F
console.log(name[1]); // a
console.log(name[5]); // n

//  If index is out of range:
console.log(name[10]); // undefined



//! 6. What are string interpolation and template literals?

//  Answer:

// In JavaScript, template literals are a way to create strings using backticks (` `) instead of single ('') or double ("") quotes.

// String interpolation is the process of inserting variables or expressions directly inside a string using template literals.

// 🔹 Syntax:
let name = "Farhan";
let age = 21;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// 🔹 Explanation:
// - Use backticks (` `) to define the string.
// - Use ${} to insert variables or expressions inside the string.

// 🔹 Without template literals:
let oldMessage = "My name is " + name + " and I am " + age + " years old.";
console.log(oldMessage);



//! 7. How do you convert a string to uppercase and lowercase?



// In JavaScript, you can convert a string to uppercase using the toUpperCase() method,
// and to lowercase using the toLowerCase() method.

// 🔹 Syntax:
string.toUpperCase();
string.toLowerCase();

// 🔹 Example:
let text = "JavaScript";

let upper = text.toUpperCase(); // "JAVASCRIPT"
let lower = text.toLowerCase(); // "javascript"

console.log("Uppercase:", upper);
console.log("Lowercase:", lower);


//! 8. Write a function that checks if a string contains a specific word (using includes())



// In JavaScript, the includes() method checks if a string contains a specific word or substring.
// It returns true if found, otherwise false.

function containsWord(sentence, word) {
  return sentence.includes(word);
}

// 🔹 Example:
let str = "JavaScript is a powerful language";

console.log(containsWord(str, "powerful")); // true
console.log(containsWord(str, "weak"));     // false




//! 9. How do you trim extra spaces from a string (leading and trailing)?



// In JavaScript, the trim() method is used to remove extra spaces from the beginning (leading)
// and end (trailing) of a string.

// 🔹 Syntax:
string.trim();

// 🔹 Example:
let messyString = "   Hello World!   ";

let cleanString = messyString.trim();

console.log("Before trim:", `"${messyString}"`);
console.log("After trim:", `"${cleanString}"`);





//! 10. Write a program to count the number of vowels in a given string.



// This program will count how many vowels (a, e, i, o, u) are present in a given string.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

// 🔹 Example:
let input = "JavaScript is fun";
let vowelCount = countVowels(input);

console.log("Vowel count:", vowelCount); // Output: 5

