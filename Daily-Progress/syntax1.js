
let arr = [1, 2, 3]
console.log(arr)

let name = "My name is farhan"
console.log(name)

let obj = { name: "farhan", age: 23 }
console.log(obj)

if (5 == '5') {
    console.log("True")

}
else {
    console.log("False")

}

if (5 === '5') {
    console.log("True")

}

else {
    console.log(
        "False"
    )
}


for (let i = 0; i < 5; i++) {
    console.log(i)
}

let day = "Mon";

switch (day) {
    case "Mon":
        console.log("Work");
        break;

    case "Sun":
        console.log("Rest");
        break;

    default:
        console.log("Invalid");
        break;
}

console.log("This is for loop ")
for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log("This is while loop ")
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log("This is do while loop")
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);


//  7 Arrays 

let fruits = ["apple", "banana"];
console.log(fruits)

fruits.push("Mango");   // Add
console.log(fruits)

fruits.pop()             // Remove from right side. 
console.log(fruits)

console.log(fruits[1])     // Access. 

// Objects. 

let person = {
    name: "Farhan",
    age: 23,
    greet: function () {
        return "Hello" + this.name;
    }
};

console.log(person)
console.log(person.name)
console.log(person.greet()); 
