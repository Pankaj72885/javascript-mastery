// ========================================================
// Default Parameters, Object Shorthand, Optional Chaining & Nullish Coalescing
// ========================================================

// ========================================================
// Default Parameters
// ========================================================

// Pre-ES6 way of handling default values
function greetOld(name, greeting) {
    // Check if parameters are undefined and provide defaults
    name = name || 'Guest';
    greeting = greeting || 'Hello';
    return `${greeting}, ${name}!`;
}

console.log(greetOld());          // Hello, Guest!
console.log(greetOld('John'));    // Hello, John!
console.log(greetOld('John', 'Hi')); // Hi, John!

// The problem with the old approach: falsy values are replaced
console.log(greetOld('', ''));    // Hello, Guest! (not what we wanted)

// ES6 default parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

console.log(greet());             // Hello, Guest!
console.log(greet('John'));       // Hello, John!
console.log(greet('John', 'Hi')); // Hi, John!
console.log(greet('', ''));       // , ! (preserves empty strings)

// Default parameters can be expressions
function calculateTax(price, taxRate = price * 0.07) {
    return price + taxRate;
}

console.log(calculateTax(100));      // 107 (using default tax rate)
console.log(calculateTax(100, 10));  // 110 (using provided tax rate)

// Default parameters can use previous parameters
function createUser(name, role = 'user', id = `${role}-${Date.now()}`) {
    return { name, role, id };
}

const user1 = createUser('Alice');
const user2 = createUser('Bob', 'admin');

console.log(user1); // { name: 'Alice', role: 'user', id: 'user-1234567890' }
console.log(user2); // { name: 'Bob', role: 'admin', id: 'admin-1234567890' }

// ========================================================
// Object Property Shorthand
// ========================================================

// Pre-ES6 way of creating objects from variables
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const personOld = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    greet: function () {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
};

console.log(personOld);

// ES6 object property shorthand
const person = {
    firstName,  // Same as firstName: firstName
    lastName,   // Same as lastName: lastName
    age,        // Same as age: age
    // Method shorthand
    greet() {   // Same as greet: function() { ... }
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
};

console.log(person);
console.log(person.greet()); // Hello, John Doe

// Combining shorthand with computed properties
const propName = 'job';
const propValue = 'Developer';

const employee = {
    firstName,
    lastName,
    [propName]: propValue,  // Computed property name
    [`${propName}Level`]: 'Senior'  // Computed property with template literal
};

console.log(employee);
// { firstName: 'John', lastName: 'Doe', job: 'Developer', jobLevel: 'Senior' }

// ========================================================
// Optional Chaining (?.) - ES2020
// ========================================================

const user = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Wonderland'
        // country is missing
    },
    // contacts is missing
    getFullName() {
        return `${this.name} Smith`;
    }
};

// Pre-ES2020 way of safely accessing nested properties
let country;
if (user && user.address && user.address.country) {
    country = user.address.country;
} else {
    country = 'Unknown';
}
console.log(country); // Unknown

// Using optional chaining
const countryWithOptional = user?.address?.country || 'Unknown';
console.log(countryWithOptional); // Unknown

// Accessing potentially undefined methods
const fullName = user?.getFullName?.() || 'Anonymous';
console.log(fullName); // Alice Smith

// Accessing potentially undefined array items
const contacts = user?.contacts?.[0]?.phone || 'No contacts';
console.log(contacts); // No contacts

// ========================================================
// Nullish Coalescing Operator (??) - ES2020
// ========================================================

// The problem with OR (||) operator for defaults
const settings = {
    theme: 'dark',
    fontSize: 0,  // Valid value but falsy
    showSidebar: false  // Valid value but falsy
};

// Using OR operator
const themeOr = settings.theme || 'light';
const fontSizeOr = settings.fontSize || 16;
const showSidebarOr = settings.showSidebar || true;

console.log(themeOr);       // dark (works as expected)
console.log(fontSizeOr);    // 16 (not what we wanted, 0 is valid)
console.log(showSidebarOr); // true (not what we wanted, false is valid)

// Using nullish coalescing operator
// Only falls back to default if value is null or undefined
const themeNullish = settings.theme ?? 'light';
const fontSizeNullish = settings.fontSize ?? 16;
const showSidebarNullish = settings.showSidebar ?? true;

console.log(themeNullish);       // dark
console.log(fontSizeNullish);    // 0 (preserves the valid falsy value)
console.log(showSidebarNullish); // false (preserves the valid falsy value)

// Combining optional chaining with nullish coalescing
const userConfig = null;
const defaultConfig = { timeout: 500 };

// Safe access with fallback for the entire object or specific properties
const timeout = userConfig?.timeout ?? defaultConfig.timeout;
console.log(timeout); // 500

// Real-world example: API response handling
function processResponse(response) {
    // Extract data safely, with defaults for missing properties
    const status = response?.status ?? 'unknown';
    const data = response?.data ?? [];
    const error = response?.error?.message ?? null;

    return { status, data, error };
}

const successResponse = { status: 'success', data: [1, 2, 3] };
const errorResponse = { status: 'error', error: { message: 'Not found' } };
const emptyResponse = null;

console.log(processResponse(successResponse));
// { status: 'success', data: [1, 2, 3], error: null }

console.log(processResponse(errorResponse));
// { status: 'error', data: [], error: 'Not found' }

console.log(processResponse(emptyResponse));
// { status: 'unknown', data: [], error: null }