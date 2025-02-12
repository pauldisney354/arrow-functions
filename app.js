'use strict';

// STEP 1: Standard function expression
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

console.log('The old way:', theOldWay('Code 301'));

// STEP 2: Refactored to arrow function
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

console.log('The new way:', theNewWay('Code 301'));

// STEP 3: Omitting parentheses for single parameter
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

console.log('Without parens:', withoutParens('Code 301'));

// STEP 4: Single-line arrow function
const oneLiner = course => `I am currently enrolled in ${course}`;

console.log('As a one-liner:', oneLiner('Code 301'));

// STEP 5: Multiple parameters in function expression
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

console.log('Let\'s do some math:', add(4, 5));

// STEP 6: Multiple parameters in arrow function
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

console.log('Add as a one-liner:', addOneLiner(4, 5));

// STEP 7: Multiple lines of code in arrow function
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

console.log('Multi-line arrow function:', multiLiner('hello'));

// STEP 8: Returning an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));

// STEP 9: Returning an object with arrow functions
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));

// STEP 10: Refactoring functions into arrow functions
let sum = (a, b, c, d) => a + b + c + d;

console.log(sum(1, 2, 3, 4)); // Output: 10

let objectLit = () => ({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
});

console.log(objectLit()); // Output: {key1: "value1", key2: "value2", key3: "value3"}

let sumAndProduct = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};

console.log(sumAndProduct(3, 9)); // Output: [12, 27]

let message = name => `Hello, ${name}!`;

console.log(message('Allie')); // Output: Hello, Allie!

// STEP 11: Arrow functions and constructor functions
let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe Schmoe', 100, 'Anytown, USA');

console.log(joe); // Output: Student {name: "Joe Schmoe", age: 100, hometown: "Anytown, USA"}

Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

console.log(joe.greeting()); // Output: Hi, my name is Joe Schmoe

Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};

console.log(Student.courseName()); // Output: This student is enrolled in Code 301.

// Testing arrow functions in prototype methods
Student.prototype.scope = function() {
  console.log(this); // "this" refers to the instance (joe)
};

joe.scope(); // Output: Student {name: "Joe Schmoe", age: 100, hometown: "Anytown, USA"}

Student.prototype.scopeArrow = () => console.log(this); // "this" refers to the global object (Window)

joe.scopeArrow(); // Output: Window {...} (or global object in non-browser environments)

// Answers to questions:
// 1. "this" in joe.scope() refers to the instance of the Student object (joe).
// 2. "this" in joe.scopeArrow() refers to the global object (Window in browsers).
// 3. Arrow functions do not have their own "this" binding; they inherit "this" from the surrounding lexical context.