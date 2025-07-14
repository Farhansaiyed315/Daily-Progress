

//! 1. What is a class in JavaScript? How is it different from a constructor function?

/*
A class in JavaScript is a blueprint for creating objects. 
It is a cleaner and more modern syntax introduced in ES6 to work with objects and inheritance.

You can define a class using the `class` keyword. Inside it, you define a `constructor` for initialization and methods for behavior.

Before classes, constructor functions were used to do the same thing using function syntax and prototypes.

Difference between class and constructor function:
- Syntax: Classes use cleaner and more readable syntax.
- Classes are not hoisted like function constructors.
- In classes, methods are automatically added to the prototype.
*/

// Class syntax
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, I'm " + this.name);
  }
}

const p1 = new Person("Farhan");
p1.greet(); // Hello, I'm Farhan

// Constructor function way (older)
function PersonFn(name) {
  this.name = name;
}

PersonFn.prototype.greet = function () {
  console.log("Hello, I'm " + this.name);
};

const p2 = new PersonFn("Farhan");
p2.greet(); // Hello, I'm Farhan










//! 2. Write a basic class named `Person` with a constructor that takes `name` and `age`, and a method `greet()` that logs "Hello, my name is <name>".

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Farhan", 21);
person1.greet(); // Hello, my name is Farhan












//! 3. What is the use of the `constructor()` method in a class?

/*
The `constructor()` is a special method in a JavaScript class that gets called automatically 
when a new object is created using the `new` keyword.

Its main purpose is to initialize the object’s properties.

Only one `constructor()` is allowed per class, and if you don’t define one, 
JavaScript adds a default empty constructor behind the scenes.
*/

// Example:
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showDetails() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Tesla", "Model 3");
car1.showDetails(); // Tesla Model 3













//! 4. Explain how inheritance works in JavaScript using the `extends` keyword. Give an example.

/*
In JavaScript, `extends` is used to create a subclass (child class) that inherits
properties and methods from another class (parent class).

This allows code reuse — the child class can use or override the methods of the parent class.
To call the parent class’s constructor inside the child class, we use `super()`.
*/

// Example:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d1 = new Dog("Tommy");
d1.speak(); // Tommy barks.

/*
Explanation:
- `Dog` extends `Animal`, so it inherits everything from `Animal`.
- The `Dog` class overrides the `speak()` method with its own version.
*/










//! 5. What is the role of the `super()` keyword in a subclass?

/*
The `super()` keyword is used in a subclass to call the constructor or methods 
of its parent class.

In a subclass’s constructor, you **must** call `super()` before using `this`, 
or you'll get an error.

It’s useful for initializing the parent class’s properties and for reusing its behavior.
*/

// Example:
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // calls Parent's constructor
    this.age = age;
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const child1 = new Child("Farhan", 21);
child1.info(); // Farhan is 21 years old.


