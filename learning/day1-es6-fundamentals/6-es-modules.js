// ========================================================
// ES Modules
// ========================================================

// ES Modules are JavaScript's official standard for modular code organization
// They allow you to split your code into separate files for better organization
// and reusability.

// ========================================================
// Module Basics - How to Export and Import
// ========================================================

/*
// Example of exporting from a module (math.js):
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

const privateFunction = () => {
    console.log('This function is not exported');
};

// Default export (only one per module)
export default function multiply(a, b) {
    return a * b;
}
*/

/*
// Importing in another file (app.js):

// Import specific exports
import { PI, add } from './math.js';

// Import with alias
import { subtract as sub } from './math.js';

// Import default export
import multiply from './math.js';

// Import default and named exports together
import multiply, { PI, add } from './math.js';

// Import all exports as a namespace object
import * as math from './math.js';

console.log(PI);                // 3.14159
console.log(add(2, 3));         // 5
console.log(sub(5, 2));         // 3
console.log(multiply(2, 3));    // 6
console.log(math.PI);           // 3.14159
console.log(math.add(2, 3));    // 5
*/

// ========================================================
// Dynamic Imports
// ========================================================

/*
// Static imports (shown above) are evaluated at compile time
// Dynamic imports are evaluated at runtime

button.addEventListener('click', async () => {
    try {
        // Import the module dynamically when needed
        const mathModule = await import('./math.js');

        console.log(mathModule.add(2, 3));
        console.log(mathModule.default(4, 5)); // Access default export
    } catch (error) {
        console.error('Error loading module:', error);
    }
});
*/

// ========================================================
// Module Organization Patterns
// ========================================================

/*
// 1. Barrel exports (index.js in a directory)
// In utils/math.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// In utils/string.js
export function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// In utils/index.js (barrel file)
export * from './math.js';
export * from './string.js';

// In app.js
import { add, capitalize } from './utils';
*/

/*
// 2. Re-exporting with modifications
// In config/defaults.js
export const DEFAULT_TIMEOUT = 3000;

// In config/index.js
import { DEFAULT_TIMEOUT } from './defaults.js';

// Re-export with a different name
export { DEFAULT_TIMEOUT as TIMEOUT };

// Re-export everything
export * from './api-endpoints.js';
*/

// ========================================================
// Practical Example - Module Structure
// ========================================================

/*
// user.js - User-related functionality
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        return `${this.name} (${this.email})`;
    }
}

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export default function createUser(name, email) {
    if (!validateEmail(email)) {
        throw new Error('Invalid email');
    }
    return new User(name, email);
}
*/

/*
// app.js - Main application file
import createUser, { User, validateEmail } from './user.js';
import { API_URL } from './config.js';

document.getElementById('createButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;

    if (validateEmail(emailInput)) {
        try {
            const user = createUser(nameInput, emailInput);
            console.log(`User created: ${user.displayInfo()}`);

            // Use the API_URL from config module
            fetch(`${API_URL}/users`, {
                method: 'POST',
                body: JSON.stringify({
                    name: user.name,
                    email: user.email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    } else {
        console.error('Invalid email format');
    }
});
*/

// ========================================================
// Browser Support and Usage
// ========================================================

/*
<!-- In HTML, use type="module" to use ES modules directly in browsers -->
<script type="module" src="app.js"></script>

<!-- You can also use inline module scripts -->
<script type="module">
    import { add } from './math.js';
    console.log(add(2, 3));
</script>
*/

// Notes on ES Modules:
// 1. ES Modules are always in strict mode ('use strict' is implied)
// 2. Each module has its own scope (variables are not global)
// 3. Modules are executed only once, even if imported multiple times
// 4. Imports are hoisted (moved to the top of the file)
// 5. Modules use deferred loading by default (like adding defer to script tags)
// 6. To use in Node.js, either use .mjs extension or set "type": "module" in package.json

// For production, bundlers like Webpack, Rollup, or Parcel are often used
// to combine modules into optimized bundles for browser delivery