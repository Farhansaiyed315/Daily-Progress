

//! 1. What is a closure in JavaScript? Explain with a simple example.

/*
A closure in JavaScript is when a function remembers and can access variables
from its outer scope, even after the outer function has finished executing.

In short:
If an inner function uses variables from an outer function — and the inner function is returned or used later — that's a closure.

Closures are useful for:
- Data privacy
- Creating private variables
- Keeping state in async code
*/

//  Simple example:
function outer() {
  let name = "Farhan"; // variable from outer function

  function inner() {
    console.log("Hello, " + name); // inner function uses 'name'
  }

  return inner; // return the inner function
}

const greet = outer(); // outer() runs and gives back inner function
greet(); // logs: Hello, Farhan



//! 2. What will be the output of the following code?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // ?
counter(); // ?

/*
 Output:
1
2

 Explanation:
- `outer()` is called, and it returns the `inner()` function.
- Inside `outer()`, there's a local variable `count = 0`.
- When we call `counter()`, it runs `inner()` which:
  - Increments `count` by 1
  - Logs the new value of `count`
- Because of the **closure**, `inner()` remembers the `count` variable even after `outer()` is done executing.

So the first `counter()` logs 1,
and the second `counter()` logs 2,
because they share the same `count` in closure scope.
*/



//! 3. How do closures help in data privacy or encapsulation?

/*
Closures help in **data privacy** and **encapsulation** by allowing you to create
**private variables** — variables that can't be accessed directly from outside the function.

 In simple words:
You can "lock" variables inside a function and expose only what you want — just like making variables private in other languages like Java or C++.

This is super useful for:
 Protecting internal state
 Preventing accidental changes
 Creating clean, modular code
*/

//  Example: counter with private "count"
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
console.log(counter.getCount()); // 2
// console.log(counter.count); //  undefined (can't access directly)



//! 4. Can a closure access variables from its outer scope even after the outer function has finished execution?

/*
 Yes, that's exactly what closures do!

Even after the outer function finishes execution, the inner function (closure)
**remembers** the variables from the outer function's scope.

JavaScript uses something called **lexical scoping**, so the inner function keeps a reference to those variables.
This is what allows closures to work.
*/

// Example:
function outer() {
  let message = "I am still here!";
  
  return function inner() {
    console.log(message);
  };
}

const sayMessage = outer(); // outer() runs and returns inner
sayMessage(); // logs: I am still here!

/*
Explanation:
- When `outer()` is called, it defines `message` and returns `inner()`.
- Even though `outer()` has finished running, `inner()` still remembers `message`.
- This is possible because of closure.
*/



//! 5. What is the output of this code and why?

function greet() {
  let name = "Farhan";
  return function() {
    console.log("Hello " + name);
  };
}

const sayHello = greet();
sayHello(); // ?

/*
 Output:
Hello Farhan

 Why?
- When `greet()` is called, it creates a local variable `name = "Farhan"` and returns an inner function.
- The returned function uses `name` from its outer scope.
- Even though `greet()` has finished executing, the returned function still "remembers" the value of `name`.

This is a perfect example of a **closure** — the function has access to the variables from its outer scope, even after that outer function is done running.
*/



//! 6. How does JavaScript handle closures inside a loop? What will this print and why?

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/*
 What will it print?

 Output (after ~1 second):
3
3
3

Why?
- `var` is function-scoped, NOT block-scoped.
- So all three `setTimeout()` functions share the same `i` (from the same scope).
- By the time the timeouts run (after 1 second), the loop is done and `i` is 3.
- Each callback accesses the same `i` due to closure and sees `3`.

This is a classic "closure inside a loop" problem!

 How to fix it?
Use `let` instead of `var` or wrap the `setTimeout` in a closure.

 Using `let` makes a new `i` for every loop iteration:
*/
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); /
