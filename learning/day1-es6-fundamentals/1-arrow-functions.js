// ========================================================
// Arrow Functions and Lexical 'this'
// ========================================================

// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};

// Arrow function - basic syntax
const arrowFunction = (a, b) => {
    return a + b;
};

// Arrow function with implicit return (when there's just one expression)
const shortArrowFunction = (a, b) => a + b;

// Arrow function with a single parameter (parentheses optional)
const square = x => x * x;

// Arrow function with no parameters (parentheses required)
const sayHello = () => 'Hello!';

console.log(traditionalFunction(2, 3)); // 5
console.log(arrowFunction(2, 3));      // 5
console.log(shortArrowFunction(2, 3));  // 5
console.log(square(4));                // 16
console.log(sayHello());               // Hello!

// ========================================================
// Lexical 'this' Behavior
// ========================================================

// In traditional functions, 'this' is dynamically scoped
// It depends on how the function is called
const person = {
    name: 'Alice',
    traditionalGreet: function () {
        setTimeout(function () {
            console.log('Traditional: Hello, ' + this.name); // 'this' is not the person object here
        }, 100);
    },

    // Arrow functions capture 'this' from their surrounding context (lexical scope)
    arrowGreet: function () {
        setTimeout(() => {
            console.log('Arrow: Hello, ' + this.name); // 'this' refers to the person object
        }, 100);
    }
};

person.traditionalGreet(); // Traditional: Hello, undefined
person.arrowGreet();      // Arrow: Hello, Alice

// ========================================================
// When NOT to use Arrow Functions
// ========================================================

// 1. Object methods (when you need 'this' to refer to the object)
const counter = {
    count: 0,
    // Bad: 'this' doesn't refer to the counter object
    badIncrement: () => {
        this.count++; // 'this' refers to the outer scope, not the counter object
    },
    // Good: 'this' refers to the counter object
    goodIncrement: function () {
        this.count++;
    }
};

// 2. Constructor functions (arrow functions cannot be used as constructors)
// Bad:
// const Person = (name) => {
//   this.name = name; // Error: arrow functions don't have their own 'this'
// };

// Good:
function Person(name) {
    this.name = name;
}

// 3. Event handlers (when you need 'this' to refer to the element)
// document.getElementById('button').addEventListener('click', function() {
//   console.log(this); // 'this' refers to the button element
// });

// With arrow function, 'this' would refer to the outer scope, not the button
// document.getElementById('button').addEventListener('click', () => {
//   console.log(this); // 'this' refers to the outer scope (window or undefined in strict mode)
// });