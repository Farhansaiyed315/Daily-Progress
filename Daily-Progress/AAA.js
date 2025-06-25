let name = "Farhan";
let msg = `hi my name is ${name}`; // Template string
console.log(msg)
let person = { name: "Farhan", age: 21 };
let { name: newName, age: myage } = person; // Destructuring
console.log(person)
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // Spread operator
console.log(newArr)


function add(a = 1, b = 3) {
    return a + b;
}
console.log("The addition of two numbers is ", add())
