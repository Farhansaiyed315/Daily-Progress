
//! 1. What does the `async` keyword do when added to a function declaration?

// The asyc keyword makes a function return a promise automatically. 
// it allows 
// the use of await inside a function to pause execution until a promise is resolved. 
j// This helps write asynchronous code in a cleaner and more readable way. 



async function greet() {
    return "Hello";
}

greet().then(msg => console.log(msg));





//! 2. What will be the output of the following code snippet?

async function test (){
    return "Hello";
}

const result = test();
console.log(result)






//! 3. Rewrite the following `.then()` based promise code using `async`/`await`:


async function fetchData() {
    try{
        const response = await(link);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}






//! 6. Explain the difference between `await Promise.all()` and using multiple `await` statements one after another.4


// `await Promise.all()` runs multiple async tasks in parallel and waits for all of them to finish.

// Using multiple `await` statements one after another runs them sequentially (one-by-one).

// Parallel is faster when tasks are independent.



