//! Print even numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//! Print numbers from 10 to 1 (reverse).

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//! Print the sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum is:", sum);

//! Print multiplication table of 5 (like 5 x 1 = 5 ... till 10).


let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


//! Print the factorial of a number (e.g., 5! = 120).

let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`Factorial of ${num} is: ${fact}`);