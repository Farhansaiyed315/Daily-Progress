
//? array. -----------------------------------------------------------------------------------
let arr = [1, 2, 3, 4, 5];
console.log(arr);




//? conditionals ---------------------------------------------------------------
let num = 55;
if (num % 2 === 0) {
    console.log("Number is even ")
}
else {
    console.log("Number is odd ")
}




//? destructuring-------------------------------------------------------------------------------

const fruits = ['apple', 'banana', 'mango'
]

// without destructuring.
const first = fruits[0];
const second = fruits[1];
console.log(first, second)

//? with destructuring. 
const [firstfruit, secondfruit, thirdfruit] = fruits;

console.log(firstfruit)
console.log(secondfruit)
console.log(thirdfruit)





//? error handling. ---------------------------------------------------------------------
try {
    let result = x + 5;
} catch (error) {
    console.log("Something went wrong:" + error.message);
}






//? function---------------------------------------------------------------------------
function addNumbers(a, b) {
    return a + b
}

const result = addNumbers(4, 6);
console.log("The sum is", result)




//?  FOR LOOP ------------------------------------------------------------------------

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}




//?   FOR EACH LOOP-----------------------------------------------------------------------


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log(num);
});



//? FOR IN LOOP ----------------------------------------------------------------------

const person = {
    name: "Farhan",
    age: 21,
    city: "Mumbai"
};

for (const key in person) {
    console.log(key);
}






//? WHILE LOOP -------------------------------------------------------------------------------

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}




//?  DO WHILE LOOP --------------------------------------------------------------------------

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);





//? object-------------------------------------------------------------------------------

const me = {
    name: 'Farhan',
    age: '333',
    city: 'Mumbei'
};

console.log(me);





//? SETS -----------------------------------------------------------------------------------
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(" Duplicate, will be ignored", mySet);




//? MAPS ---------------------------------------------------------------------------------------

const myMap = new Map();
myMap.set("name", "Farhan");
myMap.set("age", 21);
console.log(myMap.get("name"));




//? String--------------------------------------------------------------------------------------

let name1 = "Farhan";       // Double quotes
let name2 = 'Saiyed';       // Single quotes
let greeting = `Hello`;     // Backticks (template literal)