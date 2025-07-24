export const flashcards = [
  {
    question: "What is the difference between var, let, and const?",
    answer: "var is function-scoped and can be re-declared; let and const are block-scoped. let allows reassignment; const does not (though const objects can be modified)."
  },
  {
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that remembers variables from its outer scope even after the outer function has finished executing."
  },
  {
    question: "What is the difference between == and ===?",
    answer: "== checks for value equality with type coercion, while === checks for both value and type equality."
  },
  {
    question: "What is the event loop in JavaScript?",
    answer: "The event loop handles asynchronous callbacks by pushing them to the call stack once the stack is clear."
  },
  {
    question: "What is the purpose of 'use strict'?",
    answer: "'use strict' enables strict mode which helps catch common coding mistakes and disables some unsafe features."
  },
  {
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving declarations (but not initializations) to the top of a scope."
  },
  {
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value; null is an intentional absence of any value."
  },
  {
    question: "What is a promise in JavaScript?",
    answer: "A promise is an object representing the eventual completion or failure of an asynchronous operation."
  },
  {
    question: "What does the 'this' keyword refer to?",
    answer: "'this' refers to the object that is executing the current function. Its value depends on how the function is called."
  },
  {
    question: "What is the difference between call(), apply(), and bind()?",
    answer: "call() and apply() invoke a function with a specified 'this' value; bind() returns a new function with 'this' bound."
  },
  {
    question: "What are arrow functions?",
    answer: "Arrow functions are concise function expressions that do not have their own 'this', 'arguments', or 'super'."
  },
  {
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code blocks execution until it completes; asynchronous code allows other operations to run while it executes."
  },
  {
    question: "What are JavaScript data types?",
    answer: "Primitive types include string, number, boolean, null, undefined, symbol, bigint; objects are non-primitive."
  },
  {
    question: "What are template literals?",
    answer: "Template literals are string literals allowing embedded expressions, written using backticks (`) instead of quotes."
  },
  {
    question: "What is the difference between forEach and map?",
    answer: "forEach executes a function for each array element without returning anything; map returns a new array with transformed elements."
  },
  {
    question: "What is destructuring in JavaScript?",
    answer: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables."
  },
  {
    question: "What is the spread operator?",
    answer: "The spread operator (...) expands elements of an iterable (like an array) into individual elements."
  },
  {
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "localStorage persists data with no expiration; sessionStorage only lasts for the duration of the page session."
  },
  {
    question: "What are higher-order functions?",
    answer: "Higher-order functions take functions as arguments or return functions as results."
  },
  {
    question: "What is the purpose of async/await?",
    answer: "async/await makes asynchronous code look and behave like synchronous code, simplifying promise-based logic."
  }
];
