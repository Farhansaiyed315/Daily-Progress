
//! 1. Use setTimeout to print "Welcome to JavaScript" after a 3-second delay.

setTimeout(() => {
  console.log("Welcome to JavaScript");
}, 3000); // 3000 ms = 3 seconds










//! 2. Write a function that prints "Task completed" after 5 seconds using setTimeout.

function completeTask() {
  setTimeout(() => {
    console.log("Task completed");
  }, 5000); // 5000 ms = 5 seconds
}
completeTask(); // Call the function










//! 3. Show a message in the console after 2 seconds, then clear the timeout before it runs.

const timeoutId = setTimeout(() => {
  console.log("This will NOT be shown");
}, 2000);

clearTimeout(timeoutId); // Cancels the above timeout immediately











//! 4. Use setTimeout in a loop to print numbers 1 to 5, each after i seconds (i.e., 1 after 1s, 2 after 2s, ...)

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000); // delay increases with i
}











//! 5. Explain the difference between setTimeout and setInterval using a short example.

/*
  setTimeout: Executes a function ONCE after a delay.
  setInterval: Executes a function REPEATEDLY after every interval.
*/

// setTimeout example
setTimeout(() => {
  console.log("This runs once after 2 seconds (setTimeout)");
}, 2000);

// setInterval example
setInterval(() => {
  console.log("This runs every 2 seconds (setInterval)");
}, 2000);
