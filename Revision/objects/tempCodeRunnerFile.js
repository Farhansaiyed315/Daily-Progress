
let student = {
    name: "Farhan",
    age: 21,

    //! Method using `this`
    greet: function(){
        console.log("Helllo my name is " + this.name + " and I am " + this.age + "years old.");
    }
}
student.greet();

