

//! 1. Use setTimeout to print "Welcome to JavaScript" after a 3-second delay.

setTimeout(() => {
    console.log("Welcome to the website");

},3000);













//! 2. Write a function that prints "Task completed" after 5 seconds using setTimeout.

function CompleteTask(){
    setTimeout (() => {
        console.log("Task completed");

    }, 5000);
}

CompleteTask();












//! 3. Show a message in the console after 2 seconds, then clear the timeout before it runs.

const timeout = setTimeout(() => {
    console.log("meassage");
}, 2000 );

clearTimeout(timeout);



