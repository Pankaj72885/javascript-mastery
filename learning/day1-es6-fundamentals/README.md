# ES6 Fundamentals

This directory contains examples and explanations of key ES6 (ECMAScript 2015) features and some newer JavaScript features that have become essential for modern JavaScript development.

## Files and Topics

1. **Arrow Functions** (`1-arrow-functions.js`)

   - Basic arrow function syntax
   - Implicit returns
   - Lexical `this` behavior
   - When not to use arrow functions

2. **Template Literals** (`2-template-literals.js`)

   - String interpolation
   - Multi-line strings
   - Expression evaluation
   - Tagged templates
   - Raw strings

3. **Destructuring** (`3-destructuring.js`)

   - Array destructuring
   - Object destructuring
   - Default values
   - Rest pattern in destructuring
   - Practical use cases

4. **Spread and Rest Operators** (`4-spread-rest.js`)

   - Spread operator with arrays
   - Spread operator with objects
   - Rest parameters in functions
   - Common use cases

5. **Default Parameters, Object Shorthand & Nullish Operators** (`5-default-params-shorthand-nullish.js`)

   - Default function parameters
   - Object property shorthand
   - Method shorthand
   - Optional chaining (`?.`)
   - Nullish coalescing operator (`??`)

6. **ES Modules** (`6-es-modules.js`)
   - Export and import syntax
   - Default exports
   - Named exports
   - Dynamic imports
   - Module organization patterns

## How to Run

You can run any of these examples using Node.js:

```bash
node 1-arrow-functions.js
node 2-template-literals.js
# etc.
```

For the ES Modules example, you may need to:

1. Rename the file to have a `.mjs` extension
2. Or add `{"type": "module"}` to your `package.json`
3. Or use a bundler like Webpack, Rollup, or Parcel

## Learning Path

These examples are designed to be studied in order, as each builds on concepts from the previous ones. Each file contains detailed comments explaining the concepts and practical examples showing how they're used in real-world scenarios.

The code is heavily commented to explain:

- How each feature works
- Comparisons with pre-ES6 approaches
- Best practices and common pitfalls
- Practical use cases

## Additional Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ES6 Features](https://github.com/lukehoban/es6features)
