
const student = {
  name: "Farhan Saiyed",
  age: 21,
  address: {
    street: "MG Road",
    city: "Mumbai",
    pincode: 400001
  }
};


console.log(student.address.city);    
console.log(student["address"]["pincode"]); 
