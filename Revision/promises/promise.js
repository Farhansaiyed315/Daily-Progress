


const promiseOne = new Promise (function (rsolve, reject){
    // Do task
     setTimeout(function(){
        console.log("Task completed");

        resolve() // resolve ke baad hi promise consumed pront hoga. 
     },1000);
})


promiseOne.then(function(){
    console.log("promise consumed");
}) 













// another way. 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("hleloo")
        resolve()
    },1000)


}).then(function(){
    console.log("Asyc 2 resolved. ")
})












const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Farhan", email: "Saiyed@gmail.com" });
    }, 1000); 
});

promiseThree.then(function(user) {
    console.log(user); 
});








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
