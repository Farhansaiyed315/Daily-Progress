


// 1. What is a Map in JavaScript?
// A Map is a collection of key-value pairs where keys can be of any type.


// const Mymap = new Map();
// Mymap.set("name","Farhan");
// Mymap.set("age",21);
// console.log(Mymap.get("name"));




//! 2. How do you create a new Map in JavaScript?

// Create a new empty Map

// const myMap = new Map();

// // Add key-value pairs using set()
// myMap.set('name','Farhan');
// myMap.set('age',22);
// myMap.set('isStudent',true);

// console.log(myMap);
// console.log(myMap.get('name'),"you are an absolute banger.");



//! 3. How do you add key-value pairs to a Map?

// create a new map

const myMap = new Map();

// Add key-value pairs using .set(key,value)
myMap.set(`username`,`Jii`);
myMap.set(`email`,`fahi@315`);
myMap.set(`loggedIn`,true);

// Log the whole map

console.log(myMap)
console.log(myMap.get('email',),"is the email")






//! 4. How do you get the value of a specific key in a Map?


const userMap = new Map();

userMap.set('name','Farhan');
userMap.set('age',22);
userMap.set('city','Mumbai');


const userName = userMap.get('name');
console.log(userName); 

const userCity = userMap.get('city');
console.log(userCity);



//! 5. How do you check if a Map has a specific key?


const setting = new Map();

// Add some key - value pairs
setting.set('theme','dark');
setting.set('notification',true)


// use .has(key) to check if the key exist
console.log(setting.has('languate'))
console.log(setting.has('notification'))
console.log(setting.has('theme'))

if(setting.has("notification")){
    console.log('Notification is enabled.');
}



//! 6. How do you remove a key-value pair from a Map?


const userData = new Map();
userData.set('username','Farhan');
userData.set('email','saiyedjii@gmail.com');
userData.set("loggedin",false);


userData.delete("email")

console.log(userData);




//! 7. How do you get the number of key-value pairs in a Map?

const cart = new Map();
cart.set('item1','Laptop')
cart.set('item2','Laptop5555')
cart.set('item3','Laptopjii')
cart.set('item4','Laptopooooooooo5')
cart.set('item5','Laptoppppppppppp')

console.log("Number of items in the cart is ",cart.size);




//! 8. How can you loop through all entries (key-value pairs) in a Map?


const student = new Map();
student.set('name',"farhan");
student.set('age',22);
student.set('course',"bca");

// using for off loop to get key value pairs map

for (const [key,value]of student){
    console.log(`${key} -> ${value}`);
}


//! 9. How do you convert a Map to an array?

const fruitsMap = new Map();
fruitsMap.set("apple",3)
fruitsMap.set("kela",5)
fruitsMap.set("banan",7)


const fruitsArray = Array.from(fruitsMap);
console.log(fruitsArray);




//! 10. How do you clear all key-value pairs from a Map?

const myMap = new Map();
myMap.set('name', 'Farhan');
myMap.set('age', 22);
myMap.set('city', 'Mumbai');

// Clear the Map
myMap.clear();

// Check if Map is now empty
console.log(myMap.size); 
console.log(myMap); 


