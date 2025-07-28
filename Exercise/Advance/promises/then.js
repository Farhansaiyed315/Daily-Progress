




// .then() is used with Promises in JavaScript to handle the result when the promise is successful (resolved).

// Think of a Promise like ordering something online:
// You order a phone (Promise).
// If it arrives successfully (resolved),
// then you open the box and use the phone — this is where .then() comes in.

// In other words, .then() lets you specify what should happen after a Promise completes successfully.




// | Term        | Meaning                      |
// | ----------- | ---------------------------- |
// | `resolve()` | Promise successful           |
// | `reject()`  | Promise failed               |
// | `.then()`   | Runs after success (resolve) |
// | `.catch()`  | Runs after failure (reject)  |







const PromiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "Farhan", email: "email.com" });
        } else {
            reject(`ERROR: Something went wrong`);
        }
    }, 1000);
});

PromiseFour
.then((user) => {
    console.log(user); // Logs the whole user object
    return user.username; // Accessing the username property
})
.then((username) => {
    console.log(username); // Logs just the username
})
.catch(function(error) {
    console.log(error); // Catches and logs any error
});







orderPizza
  .then((message) => {
    console.log(message); // "Pizza is here!"
    return "Now eating 🍴";
  })
  .then((nextStep) => {
    console.log(nextStep); // "Now eating 🍴"
  });




  const doMath = new Promise((resolve, reject) => {
    resolve(10); // start with 10
});

doMath
  .then((num) => {
    console.log("Starting with:", num); // 10
    return num * 2;
  })
  .then((result) => {
    console.log("After multiply by 2:", result); // 20
    return result + 5;
  })
  .then((finalResult) => {
    console.log("After adding 5:", finalResult); // 25
  })
  .catch((err) => {
    console.log("Error happened:", err);
  });







//!  reject.

  new Promise((resolve, reject) => {
  resolve(5);
})
  .then((num) => {
    console.log(num); // 5
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 10
    throw new Error("Something went wrong! 😢");
  })
  .then((num) => {
    console.log(num); // This won't run
  })
  .catch((error) => {
    console.log("Caught error:", error.message);
  });



  