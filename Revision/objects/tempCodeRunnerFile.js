

let user1 = {
    name: "Farhan",
    address: {
        city: "Mumbai",
    },
};

//! Shallow copy using spread operator.
let user2 = {...user1};


user2.name = "Engineer";
user2.address.city = "Delhi";


console.log(user1.name);
console.log(user1.address.city);