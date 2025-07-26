


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


