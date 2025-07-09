
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


for (const student of students) {
    console.log("welcome", `${student}`)
}



//! Q8: Create an array of prices [100, 200, 300], then use a for...of loop to apply a 10% discount and print the discounted prices.


const prices = [100, 200, 300];

for (const price of prices) {
    const dicountedPrice = price - price * 0.10;
    console.log("dicountedprice", `${dicountedPrice}`)
}



//! Q9: Use a for...of loop to iterate over the string "for...of loop" and print each character except spaces.


const text = "for of loop";

for (const t of text) {
    if (t !== " ") {
        console.log(t)
    }
}




//! Q10: Given an array of boolean values [true, false, true], use a for...of loop to count how many `true` values are present.


const bools = [true, false, true];
let trueCount = 0;

for (const booo of bools) {
    if (booo === true) {
        trueCount++;
    }
}

console.log("Number of values are ", trueCount)





//? ----------------------------  FOR EACH LOOP  -----------------------------------




//! Q1: Use forEach to print each element in the array [1, 2, 3, 4, 5].


const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (num) {
    console.log(num);
});




//! Q2: Given an array of names ["Farhan", "Ayaan", "Zoya"], use forEach to greet each person like "Hello, Farhan!".

const namess = ["Farhan", "Ayaan", "Zoya"];

namess.forEach(function (nem) {
    console.log("Hello", `${nem}`)
});



//! Q3: Use forEach to double each number in the array [10, 20, 30] and print the result.


const num1 = [10, 20, 30];
num1.forEach(function (d) {
    console.log(d * 2)
});




//! Q4: Given an array of strings ["pen", "pencil", "eraser"], use forEach to print the length of each string.

// const pen = ["pen", "pencil", "eraser"];

// pen.forEach(function(p){
//     console.log(p.length)
// });



const items = ["pen", "pencil", "eraser"];

items.forEach(function (item) {
    console.log(`${item} has length: ${item.length}`);
});









//! Q5: Use forEach to calculate the total sum of elements in the array [5, 10, 15, 20].


const numbers = [5, 6, 8, 4];
let sum = 0;

numbers.forEach(function (ni) {
    sum += ni;
})

console.log("Total sum", sum);




//! Q6: Given an array of marks [33, 48, 75, 62], use forEach to check and print whether each mark is "pass" (>= 35) or "fail".


const mar = [33, 48, 75, 62];

mar.forEach(function (m) {
    if (m >= 35) {
        console.log(`${m} = pass`);
    }
    else {
        console.log(`${m} = fail`);
    }
});




//! Q7: Use forEach to iterate over an array of objects: [{name: "Ali"}, {name: "Sara"}] and print each name.

const peo = [{ name: "Farhan" }, { name: "kadim" }];

peo.forEach(function (peo) {
    console.log("The names is ", peo.name);
});



//! Q8: Create an array of prices [100, 200, 300]. Use forEach to add ₹50 to each price and print the new price.


const pri = [100, 200, 300];

pri.forEach(function (pri) {
    const newpric = pri + 50;
    console.log(`new pric : ${newpric}`);
})




//! Q9: Use forEach to print the index and value of each element in the array ["a", "b", "c"].


const lett = ["a", "b", "c"];

lett.forEach(function (value, index) {
    console.log(`Index: ${index}, value: ${value}`)
});




//! Q10: Given an array of tasks ["Eat", "Code", "Sleep"], use forEach to print each task in the format: "Task: Eat".


const task =  ["Eat", "Code", "Sleep"];

task.forEach(function(tas){
    console.log(`task ${tas}`);
})




//?--------------------- FOR IN LOOP ----------------------------------------------



//! Q1: Use a for...in loop to print all keys in the object {name: "Farhan", age: 21, city: "Mumbai"}.


const person = {
    name:"farhan",
    age: 21,
    city:"Mumbai"
};

for (const key in person){
    console.log(key);
};




//! Q2: Given an object {math: 80, english: 70, science: 90}, use for...in to print each subject and its marks.


const marks = {
    math: 80,
    English: 60,
    science: 50
};

for(const mar in marks){
    console.log(`${mar}:${marks[mar]}`);
}


//! Q3: Use a for...in loop to count how many properties are present in the object {a: 1, b: 2, c: 3}.


const obj = {
    a:1,
    b:2,
    c:3,
    d:4
};

let count = 0;

for (const key in obj){
    count++;
}

console.log("Total properties:", count);





//! Q4: Create a for...in loop to copy all properties from one object to another.


const source = {
    name: "Farhan",
    age: 22,
    class: "Five"
};

const target = {};

for(const key in source){
    target [key] = source [key];
}
console.log("copied object:", target);



//! Q5: Given a nested object like {user: {name: "Ali", age: 22}}, use for...in to print the outer keys.

const outer = {
    user:{name: "Ali",
        age: 22
    }
};

for(const out in outer){
    console.log(out)
}



//! Q6: Use for...in to print only the keys of an object, not the values.


const chutiya = {
    name: "wagonr",
    brand : "brandi",
    model: 22
};

for (const key in chutiya){
    console.log(`${key}`)
}



//! Q7: Use a for...in loop to print both keys and values of the object {brand: "Nike", price: 5000, inStock: true}.


const projii = {
    naam: "jojo",
     brand : "brandi",
    model: 22
}

for(const key in projii){
    console.log(`key is ${key} and value is ${projii[key]}`)
}



//! Q8: Create an object with 5 items and use for...in to convert all string values to uppercase.




const user = {
  name: "farhan",
  city: "mumbai",
  profession: "developer",
  age: 22,
  country: "india"
};


for (const key in user){
    if(typeof user[key] === "string"){
        user[key] = user[key].toUpperCase();
    }
}

console.log(user);





//! Q9: Use for...in to check if the object {x: 10, y: 20} contains a key named "z".



const obj = {x: 10, y:20};
let hasz = false;

for(const key in obj){
if (key === "z"){
    hasz = true;
    break;
}
}

console.log("contains key 'z'?",hasz);




//! Q10: Given an object of a student with subjects and marks, use for...in to calculate total marks.



const studentMarks = {
  math: 85,
  english: 78,
  science: 92,
  history: 74,
  computer: 88
};



let total = 0;

for (const subject in studentMarks){
    total += studentMarks[subject];
}

console.log("Total Marks:", total);





//? ----------------------------- WHILE LOOP ----------------------------------------------------

//! Q1: Use a while loop to print numbers from 1 to 10.

let i = 1;

while (i <= 10 ){
    console.log(i);
    i++
}




//! Q2: Create a while loop to print even numbers between 1 and 20.

let num = 1;

while (num <= 20){
    if (num % 2 === 0){
        console.log(num);
    }
    num++;
}




//! Q3: Use a while loop to calculate the sum of numbers from 1 to 100.


let i = 1;
let sum = 0;

while (i<= 100){
    sum+=i;
    i++;
}


console.log("sum from 1 to 100 ", sum );




//! Q4: Write a while loop to print the multiplication table of 5 (from 5 × 1 to 5 × 10).


let i = 1;

while (i <= 10){
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
}




//! Q5: Use a while loop to print all characters of a string "JavaScript" one by one.



const str = "javascipt";
let i = 0;

while ( i < str.longht){
    console.log(str[i]);
    i++;
}




//? ------------------------------ DO WHILE LOOP ----------------------------------------------



//! Q1: Use a do...while loop to print numbers from 1 to 5.

let i = 1;
 
do {
    console.log(i);
    i++;

} while (i<= 5);






//! Q2: Write a do...while loop to print the multiplication table of 7 (from 7 × 1 to 7 × 10).


let i = 1;

do {
    console.log(`7 x ${i} = ${7 * i}`);
    i++;
} while(i<=20);






//! Q3: Use a do...while loop to print all even numbers from 2 to 20.


let num = 2;

do {
    console.log(num);
    num+=2;

} while (num<= 20);






//! Q4: Create a do...while loop that prints the reverse of a string "hello".




const str = "hello";
let i = str.length - 1;

do {
console.log(str[i]);
i--;

    
} while (i >= 0);






//! Q5: Write a do...while loop that adds numbers from 1 to 50 and prints the total sum.




let i = 1;
let sum = 0;

do{
    sum+= i;
    i++;

} while (i <= 50);



console.log("Total sum ", sum);