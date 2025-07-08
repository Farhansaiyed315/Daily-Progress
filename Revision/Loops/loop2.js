
//! print reverse numbers from 10 to 1 
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("even numbers printing kr do")
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("sum of 100 numbers print kr do")
//! print the sum of numbaers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("sum is ", sum)

console.log("Below is the multiplacation of 5")
//! print the multiplication table of 5
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
console.log("prime numbers from 1 to 100 are below")
//! print all prime numbers between 1 to 100;
for (let num = 2; num <= 100; num++) {
    let isprime = true;

    // check divisiblity by form 2 to num -1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isprime = false;
            break;
        }
    }

    if (isprime) {
        console.log(num);
    }
}



//? ----------------  FOR OF LOOP  ------------------------------------------------ 


//! Q1: Use a for...of loop to print each character in the string "Hello World"


const message = "Hello world"
for (const char of message) {
    console.log(char)
};





//! Q2: Given an array of numbers [10, 20, 30, 40], use a for...of loop to print each number


const numbers = [10, 20, 30, 40, 50, 60,];

for (const num of numbers) {
    console.log(num)
}




//! Q3: Use a for...of loop to calculate the sum of all elements in the array [1, 2, 3, 4, 5]



const number = [1, 2, 3, 4, 5];
let sum1 = 0;
for (const nums of number) {
    sum1 += nums;
}

console.log("sum ;", sum1);







//! Q4: Create a for...of loop to iterate over an array of fruits ["apple", "banana", "mango"] and print each fruit in uppercase.


const frui = ["apple", "banana", "mango"];

for (const f of frui) {
    console.log(f.toUpperCase())
}





//! Q5: Given a string "JavaScript", use a for...of loop to count how many vowels are in the string.
const neem = "farhan";
let vowelcount = 0;
for (const n of neem) {
    if ("aeiouAEIOU".includes(n)) {
        vowelcount++;
    }
}

console.log("numbers of vowels in neem is ", vowelcount);




//! Q6: Use a for...of loop to print all elements of a nested array: [[1, 2], [3, 4], [5, 6]] (Hint: use two for...of loops)


const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log("elements of the nested array are below:")
for (const innerArray of nestedArray) {
    for (const nu of innerArray) {
        console.log(nu)
    }
}






//! Q7: Given an array of student names ["Ali", "Sara", "John"], use a for...of loop to print a welcome message for each student.

const students = ["Ali", "Sara", "John"];


for(const student of students){
    console.log("welcome",`${student}`)
}



//! Q8: Create an array of prices [100, 200, 300], then use a for...of loop to apply a 10% discount and print the discounted prices.


const prices = [100,200,300];

for (const price of prices){
    const dicountedPrice = price - price * 0.10;
    console.log("dicountedprice",`${dicountedPrice}`)
}



//! Q9: Use a for...of loop to iterate over the string "for...of loop" and print each character except spaces.


const text = "for of loop";

for (const t of text){
    if(t !== " "){
        console.log(t)
    }
}




//! Q10: Given an array of boolean values [true, false, true], use a for...of loop to count how many `true` values are present.


const bools = [true, false, true];
let trueCount = 0;

for(const booo of bools){
    if(booo === true){
       trueCount++; 
    }
}

console.log("Number of values are ",trueCount )