
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