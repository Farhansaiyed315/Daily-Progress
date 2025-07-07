
//! 1. What is array destructuring in JavaScript? Give an example using a fruits array.

// Array destructuring is a way to unpack values from arrays into separate variables in a clean and easy way. 

const fruits = ['apple', 'banana','mango'
]

// without destructuring.
const first = fruits[0];
const second = fruits[1];
console.log(first,second)


const [firstfruit, secondfruit,thirdfruit] = fruits;

console.log(firstfruit)
console.log(secondfruit)
console.log(thirdfruit)



//! 2. How can you skip elements while destructuring an array?

// we can skip elements by leaving empty spaces between commas. 

const numbers = [10,20,30,40,50,60,];

const [a, , c] = numbers;

console.log(a);
console.log(c);


//! 3. How do you assign default values during array destructuring?

// we assing defalult values when array doest have enough elements. 

const student = ["Farhan"];

const [studentOne = "fezal", studentTwo = "Aman"] = student;

console.log(studentOne);
console.log(studentTwo);    // Aman is not from an array so its a default value. 



//! 4. What is object destructuring? Give an example using a person object.

// object destructuring allows us to extract values form an object. 

const person = {
    name: 'Farhan',
    age : 22, 
    city: 'Mumbai'
};

const {name,age,city} = person;
console.log(name);
console.log(age);
console.log(city);





//! 5. How can you rename variables while destructuring an object?

const user = {
    username: 'Farhan_saiyed',
    email: 'saiyedjii@gmail.com',
    location: 'Mumbai'
};

const  {username: UserName, email: Email, location: UserLocation} = user;

console.log(UserName);
console.log(Email);
console.log("sab variables change ho gaya naa bhidu", UserLocation);
