// ========================================================
// Template Literals (Template Strings)
// ========================================================

// Traditional string concatenation
const name = 'John';
const age = 30;
const traditionalGreeting = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';
console.log(traditionalGreeting);

// Template literals with variable interpolation
const templateGreeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(templateGreeting);

// Multi-line strings
// Traditional way (with escape characters)
const traditionalMultiLine = 'Line 1\nLine 2\nLine 3';
console.log(traditionalMultiLine);

// Template literals way (preserves line breaks)
const templateMultiLine = `Line 1
Line 2
Line 3`;
console.log(templateMultiLine);

// ========================================================
// Expression Evaluation in Template Literals
// ========================================================

// Arithmetic operations
const a = 5;
const b = 10;
console.log(`${a} + ${b} = ${a + b}`);

// Function calls
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const fruit = 'apple';
console.log(`I like ${capitalize(fruit)}s`);

// Conditional (ternary) expressions
const temperature = 22;
console.log(`It is ${temperature > 25 ? 'hot' : 'pleasant'} today.`);

// ========================================================
// Tagged Template Literals
// ========================================================

// A tag function processes the template literal
function highlight(strings, ...values) {
    // strings is an array of string literals
    // values is an array of interpolated values

    let result = '';

    // Interleave the strings with the values
    strings.forEach((string, i) => {
        result += string;
        if (i < values.length) {
            // Wrap values in HTML span with a highlight class
            result += `<span class="highlight">${values[i]}</span>`;
        }
    });

    return result;
}

const product = 'JavaScript Course';
const price = 29.99;

// Using the tagged template
const highlightedText = highlight`Buy our ${product} for just $${price}!`;
console.log(highlightedText);
// Output: Buy our <span class="highlight">JavaScript Course</span> for just $<span class="highlight">29.99</span>!

// ========================================================
// Raw Strings
// ========================================================

// String.raw tag function preserves backslashes
console.log(`Line 1\nLine 2`);        // Interpreted: Line 1
// Line 2
console.log(String.raw`Line 1\nLine 2`); // Raw: Line 1\nLine 2