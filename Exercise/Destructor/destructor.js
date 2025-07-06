
//! 1. What is a destructor and why doesn't JavaScript have traditional destructors like other languages?

// A destructor is a special method that gets called automatically when an object is destroyed,
// mainly used in languages like C++ or Java to free resources like memory or files.

// JavaScript doesn't have traditional destructors because it uses automatic garbage collection.
// The JavaScript engine (like V8 in Chrome) decides when to clean up memory that's no longer in use.
// Developers don't have control over exactly *when* an object is destroyed.

// Instead of destructors, JavaScript provides tools like FinalizationRegistry and WeakRef
// for cleanup tasks when objects are garbage collected.




//! 2. How can you perform cleanup operations in JavaScript when an object is no longer needed?

// In JavaScript, you can't manually destroy objects or know exactly when they are removed from memory.
// But you can handle cleanup in a few different ways:

// 1. Manual cleanup: Set object references to null when you no longer need them.
let obj = { name: "Farhan" };
obj = null; // This makes the object eligible for garbage collection

// 2. Use try...finally blocks: Clean up resources like timers, listeners, or files
try {
  // some code that might throw an error
} finally {
  // cleanup logic goes here (example: remove event listeners, clear intervals, etc.)
}

// 3. Use FinalizationRegistry: It lets you register a callback to run after an object is garbage collected
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Cleanup for: ${heldValue}`);
});

let user = { name: "Ali" };
registry.register(user, "user object");

// Note: FinalizationRegistry is not immediate or reliable for critical cleanup logic






//! 3. What is the FinalizationRegistry in JavaScript and how is it used?

// FinalizationRegistry is a built-in JavaScript class used to register a cleanup callback
// that runs when an object is garbage collected.

// It's useful when you want to clean up resources tied to objects after they are no longer reachable.

// Syntax:
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Cleaning up: ${heldValue}`);
});

// You register an object along with a held value (any info you need during cleanup)
let user = { name: "Farhan" };
registry.register(user, "user object");

// When 'user' is garbage collected, the callback runs and logs the held value

// Important:
// - The callback runs sometime *after* garbage collection (not instantly).
// - It should not be used for critical cleanup tasks like closing files or network connections.







//! 4. How does JavaScript's garbage collection work and how does it relate to destructors?

// JavaScript uses automatic garbage collection to manage memory.
// It automatically frees up memory that's no longer reachable or needed by the program.

// The most common technique used is called "mark-and-sweep":
// 1. The garbage collector starts from root values (like global variables).
// 2. It marks all objects that are reachable from these roots.
// 3. Then it sweeps and removes all unmarked (unreachable) objects from memory.

// This is different from languages with destructors like C++.
// In JavaScript, you can't define destructors that run at the exact time an object is destroyed.

// Instead, cleanup is either done manually (e.g. removing event listeners, clearing timers)
// or by using features like FinalizationRegistry if needed.






//! 5. Can you manually destroy or delete an object in JavaScript?

// No, you cannot manually destroy or deallocate objects in JavaScript.
// Memory management is handled automatically by the JavaScript engine through garbage collection.

// If an object becomes unreachable (no references to it), it becomes eligible for garbage collection.
// Example:
let user = { name: "Farhan" };
user = null; // Now the object is eligible for garbage collection

// The 'delete' operator in JavaScript only removes a property from an object, not the object itself.
let obj = { a: 1, b: 2 };
delete obj.a; // removes the 'a' property, but 'obj' still exists

// So, JavaScript developers cannot force the destruction of an object like in some other languages.







//! 6. What are the limitations of using FinalizationRegistry for cleanup in JavaScript?

// FinalizationRegistry provides a way to run cleanup logic when an object is garbage collected,
// but it has several limitations:

// 1. Timing is not guaranteed:
//    The cleanup callback runs sometime after garbage collection, but you don't know exactly when.

// 2. Not reliable for critical resources:
//    It's unsafe to use it for important tasks like closing database connections or saving data.

// 3. Works only with garbage-collected objects:
//    If an object is still referenced somewhere, the registry will not run the cleanup.

// 4. Difficult to debug:
//    Since the callback runs in the background, it’s hard to track when or if it executes.

// 5. Limited browser and environment support:
//    It’s a relatively new feature (added in ES2021), so may not work in older environments.

// Because of these limitations, FinalizationRegistry should only be used for optional or background cleanup tasks.




//! 7. How does WeakRef work in JavaScript and how is it connected to object finalization?

// WeakRef (Weak Reference) allows you to hold a weak reference to an object,
// meaning it doesn't prevent the object from being garbage collected.

// This is useful when you want to reference an object,
// but you don't want to keep it alive just because you're holding a reference.

// Example:
let user = { name: "Farhan" };
let weakUser = new WeakRef(user);

// Access the object (if it's still alive)
console.log(weakUser.deref()); // returns the object or undefined if it's already collected

// Once 'user' is no longer strongly referenced elsewhere, it can be garbage collected,
// even though weakUser still holds a WeakRef to it.

// Connection to finalization:
// WeakRef is often used with FinalizationRegistry to detect when the object has been collected
// and to perform some optional cleanup logic.

// Important:
// Using WeakRef is advanced and should be done carefully to avoid bugs or unpredictable behavior.






//! 8. When using closures, how can you avoid memory leaks that a destructor might prevent in other languages?

// Closures can accidentally keep variables alive even when they’re no longer needed,
// which may cause memory leaks if not handled properly.

// To avoid memory leaks with closures:

// 1. Avoid unnecessary long-lived closures:
//    Don’t keep closures around if they reference large data or DOM elements you no longer need.

// 2. Remove event listeners when they’re no longer needed:
function setup() {
  const element = document.getElementById("btn");
  function handleClick() {
    console.log("Clicked!");
  }
  element.addEventListener("click", handleClick);

  // Cleanup to avoid leaks
  return () => {
    element.removeEventListener("click", handleClick);
  };
}
const cleanup = setup();
// Later in the code
cleanup();

// 3. Set unused references to null:
let data = { info: "temp" };
// done using data
data = null;

// 4. Use WeakMap or WeakSet for objects you don't want to prevent from being garbage collected

// Unlike destructors in other languages, JavaScript doesn’t have automatic cleanup,
// so you must manually manage what your closures capture and hold on to.






//! 9. Why is relying on destructors or finalizers generally discouraged in JavaScript?

// JavaScript does not have traditional destructors like some other languages,
// and relying on FinalizationRegistry (a kind of finalizer) is generally discouraged for these reasons:

// 1. Unpredictable timing:
//    You don’t know exactly when (or even if) the finalizer will run.
//    It depends on when the garbage collector decides to clean up the object.

// 2. Not suitable for critical tasks:
//    Important operations like saving data, closing files, or network cleanup should be done manually.
//    Finalization is too unreliable for this purpose.

// 3. Can lead to hard-to-debug issues:
//    Since finalizers run in the background at unpredictable times,
//    it’s hard to test or trace them properly in code.

// 4. Non-deterministic behavior:
//    JavaScript’s garbage collection is non-deterministic,
//    meaning cleanup may be delayed or skipped entirely during the program's lifetime.

// 5. Better alternatives exist:
//    It’s usually better to use manual cleanup methods like setting references to null,
//    removing event listeners, or using try...finally blocks.

// FinalizationRegistry should only be used for optional, non-critical cleanup tasks.





//! 10. In which use cases would you consider using FinalizationRegistry in your JavaScript applications?

// FinalizationRegistry can be useful in situations where you want to perform optional cleanup
// after an object is garbage collected, especially when the cleanup is not critical.

// Common use cases:

// 1. Caching systems:
//    Automatically remove cached data when the original object is no longer in use.

const cache = new Map();
const registry = new FinalizationRegistry((key) => {
  cache.delete(key);
});

function storeData(key, value) {
  cache.set(key, value);
  registry.register(value, key);
}

// 2. Cleaning up weak references:
//    If you're using WeakRef to hold weak references, you can use FinalizationRegistry
//    to know when those references are no longer needed and clean them up.

// 3. Optional resource cleanup:
//    For example, logging when an object is collected, or cleaning up metadata or monitoring info.

// Important note:
// These are non-critical tasks. FinalizationRegistry should never be used
// for essential logic like saving files, closing DB connections, or releasing system resources.