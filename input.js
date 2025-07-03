// If you're running JavaScript in the browser (e.g., in HTML or browser console), you can use:
// prompt() opens a popup asking for input.

// It always returns a string, so convert it to number if needed:

const userInput = prompt("Enter a number:");
console.log("You entered:", userInput);


// In Node.js (VS Code / Terminal)
// If you're running JavaScript in Node.js (like in VS Code terminal), use the readline module:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Hello, " + name);
  rl.close();
});



With process.argv (Node.js only)
If you run from terminal like:

const input = process.argv[2];
const num = Number(input);
console.log("Square is:", num * num);


//! | Where?      | Method         | Example                     |
// | ----------- | -------------- | --------------------------- |
// | Browser     | `prompt()`     | `prompt("Enter something")` |
// | Node.js     | `readline`     | See example above           |
// | Node.js CLI | `process.argv` | CLI input                   |
