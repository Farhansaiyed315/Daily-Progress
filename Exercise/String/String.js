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

console.log("Vowel count:", vowelCount); 





//? Intermediate Level (11–18)


//! 11. Write a program to reverse a string without using built-in reverse()



// We'll manually reverse a string by looping through it from the end to the beginning.

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// 🔹 Example:
let input = "JavaScript";
let output = reverseString(input);

console.log("Reversed string:", output); 




//! 12. How do you check if two strings are anagrams?


// Two strings are anagrams if they contain the same characters in the same frequency,
// but possibly in a different order.

// 🔹 Steps:
// 1. Remove spaces and convert both strings to lowercase.
// 2. Split into characters, sort them, and join back.
// 3. Compare the sorted strings.

function isAnagram(str1, str2) {
  let s1 = str1.replace(/\s/g, "").toLowerCase();
  let s2 = str2.replace(/\s/g, "").toLowerCase();

  if (s1.length !== s2.length) return false;

  let sorted1 = s1.split("").sort().join("");
  let sorted2 = s2.split("").sort().join("");

  return sorted1 === sorted2;
}

// 🔹 Example:
console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("hello", "world"));     // false
console.log(isAnagram("School master", "The classroom")); // true




//! 13. What is the difference between == and === when comparing strings?


// In JavaScript:

// - == is the loose equality operator. It compares two values after converting them to the same type.
// - === is the strict equality operator. It checks both value and data type without converting.

// 🔹 Example 1 (string vs number):
let str = "123";
let num = 123;

console.log(str == num);  // true  → because "123" is converted to number
console.log(str === num); // false → because one is string, other is number

// 🔹 Example 2 (two same strings):
let a = "hello";
let b = "hello";

console.log(a == b);  // true
console.log(a === b); // true

// ✅ Use === for strict comparison to avoid unexpected bugs.




//! 14. Explain substring(), slice(), and substr() with examples.

// ✅ Answer:

// All three methods are used to extract parts of a string in JavaScript,
// but they have some differences in how they work.

// ---------------------------------------------
// 🔹 1. substring(start, end)
// - Extracts characters from start to end (not including end).
// - If start > end, it swaps them.
// - Does not accept negative indexes.

let str1 = "JavaScript";

console.log(str1.substring(0, 4)); // "Java"
console.log(str1.substring(4, 0)); // "Java" (same as above, swapped)
console.log(str1.substring(4, 10)); // "Script"
console.log(str1.substring(-3, 4)); // "Java" (negative is treated as 0)

// ---------------------------------------------
// 🔹 2. slice(start, end)
// - Similar to substring(), but supports negative indexes.
// - Negative values count from the end of the string.

let str2 = "JavaScript";

console.log(str2.slice(0, 4));   // "Java"
console.log(str2.slice(4));      // "Script"
console.log(str2.slice(-6));     // "Script"
console.log(str2.slice(-6, -3)); // "Scr"

// ---------------------------------------------
// 🔹 3. substr(start, length)
// - Extracts `length` number of characters from `start` position.
// - `start` can be negative (counting from end).
// - This method is considered **legacy** but still works.

let str3 = "JavaScript";

console.log(str3.substr(0, 4));   // "Java"
console.log(str3.substr(4, 6));   // "Script"
console.log(str3.substr(-6, 3));  // "Scr"

// ✅ Summary:
// substring(start, end) → no negative values
// slice(start, end)     → supports negative values
// substr(start, length) → uses length, supports negative start (legacy)




//! 15. Write a program that capitalizes the first letter of each word in a sentence.



// This program will take a sentence and return it with each word's first letter capitalized.

function capitalizeWords(sentence) {
  let words = sentence.split(" ");

  let capitalized = words.map(function(word) {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalized.join(" ");
}

// 🔹 Example:
let input = "javascript is awesome";
let output = capitalizeWords(input);

console.log("Capitalized:", output); // "Javascript Is Awesome"




//! 16. How do you replace a word in a string using replace()?


// In JavaScript, the replace() method is used to replace part of a string with something else.
// It only replaces the **first occurrence** unless you use a regular expression with the global flag.

// 🔹 Syntax:
string.replace(searchValue, newValue);

// 🔹 Example 1: Replacing first occurrence
let str = "JavaScript is awesome. JavaScript is fun.";
let result = str.replace("JavaScript", "JS");

console.log(result);
// Output: "JS is awesome. JavaScript is fun."

// 🔹 Example 2: Replace all occurrences using regex
let replacedAll = str.replace(/JavaScript/g, "JS");

console.log(replacedAll);
// Output: "JS is awesome. JS is fun."




//! 17. Convert a string like "farhan saiyed" to "Farhan Saiyed"



// This program will capitalize the first letter of each word in the string.

function toTitleCase(str) {
  let words = str.split(" ");

  let capitalized = words.map(function(word) {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalized.join(" ");
}

// 🔹 Example:
let name = "farhan saiyed";
let formattedName = toTitleCase(name);

console.log(formattedName); // "Farhan Saiyed"



//! 18. Split a sentence into an array of words. Then join it back with hyphens.



// We'll use split() to break the sentence into words,
// then use join() to combine them back using hyphens.

let sentence = "JavaScript is fun to learn";

let wordsArray = sentence.split(" "); // Split by space
let joinedWithHyphens = wordsArray.join("-");

console.log("Array of words:", wordsArray);
console.log("Hyphen joined:", joinedWithHyphens);

// Output:
// Array of words: [ 'JavaScript', 'is', 'fun', 'to', 'learn' ]
// Hyphen joined: JavaScript-is-fun-to-learn

