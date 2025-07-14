

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
// console.log(counter.count); // ❌ undefined (can't access directly)