"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName; //This is an Instance property
  this.birthYear = birthYear; //This is an Instance property

  // Never create a function inside a constructor and why, because this will create a new function for each instance.
  /*this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };*/
};

const jonas = new Person("John", 1990);
console.log(jonas);

// behind the scenes four steps are happening

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const Harshit = new Person("Harshit", 2000);
const Rahul = new Person("Rahul", 2001);
const Rohit = new Person("Rohit", 2002);
console.log(Harshit);
console.log(Rahul);
console.log(Rohit);

// These are constructor funcations and they are used to create objects and mimic the behavior of classes because there are no classes in javascript.
console.log(jonas instanceof Person);
console.log(Harshit instanceof Person);
console.log(Rahul instanceof Person);
console.log(Rohit instanceof Person);

// -----------------------------------------------------------

// Prototypes
// Every object has a prototype property which is an object
// Every object has a constructor property which is a function

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Harshit.calcAge();
Rahul.calcAge();

console.log(jonas.__proto__);
