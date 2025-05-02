// ========================================================
// Destructuring Assignment
// ========================================================

// ========================================================
// Array Destructuring
// ========================================================

// Basic array destructuring
const colors = ['red', 'green', 'blue'];

// Traditional way of accessing array elements
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];
console.log(firstColor, secondColor, thirdColor); // red green blue

// Using destructuring assignment
const [red, green, blue] = colors;
console.log(red, green, blue); // red green blue

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary, tertiary); // red blue

// Rest pattern (collecting remaining elements)
const [first, ...rest] = colors;
console.log(first);    // red
console.log(rest);     // ['green', 'blue']

// Default values (useful when array might not have all expected values)
const incomplete = ['apple', 'banana'];
const [fruit1, fruit2, fruit3 = 'orange'] = incomplete;
console.log(fruit1, fruit2, fruit3); // apple banana orange

// Swapping variables without a temporary variable
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// Destructuring returned arrays from functions
function getCoordinates() {
    return [33.8121, -117.9190]; // Latitude and longitude
}

const [latitude, longitude] = getCoordinates();
console.log(`Location: ${latitude}, ${longitude}`);

// ========================================================
// Object Destructuring
// ========================================================

// Basic object destructuring
const person = {
    name: 'Alice',
    age: 28,
    job: 'Engineer',
    address: {
        city: 'San Francisco',
        state: 'CA'
    }
};

// Traditional way of accessing object properties
const personName = person.name;
const personAge = person.age;
const personJob = person.job;
console.log(personName, personAge, personJob); // Alice 28 Engineer

// Using destructuring assignment
const { name, age, job } = person;
console.log(name, age, job); // Alice 28 Engineer

// Assigning to different variable names
const { name: fullName, age: years, job: profession } = person;
console.log(fullName, years, profession); // Alice 28 Engineer

// Default values
const { name: userName, country = 'USA' } = person;
console.log(userName, country); // Alice USA

// Nested object destructuring
const { address: { city, state } } = person;
console.log(city, state); // San Francisco CA

// Rest pattern with objects
const { name: personFullName, ...personDetails } = person;
console.log(personFullName); // Alice
console.log(personDetails); // { age: 28, job: 'Engineer', address: { city: 'San Francisco', state: 'CA' } }

// Destructuring in function parameters
function printPersonInfo({ name, age, job = 'Unknown' }) {
    console.log(`${name} is ${age} years old and works as a ${job}`);
}

printPersonInfo(person); // Alice is 28 years old and works as a Engineer

// Destructuring with computed property names
const key = 'name';
const { [key]: nameValue } = person;
console.log(nameValue); // Alice

// ========================================================
// Practical Use Cases
// ========================================================

// 1. Function returns with multiple values
function getUserInfo() {
    // Imagine this data comes from an API
    return {
        id: 123,
        username: 'alice_dev',
        email: 'alice@example.com',
        isActive: true
    };
}

const { id, username, isActive } = getUserInfo();
console.log(`User #${id} (${username}) is ${isActive ? 'active' : 'inactive'}`);

// 2. Destructuring in loops
const users = [
    { id: 1, name: 'John', role: 'Admin' },
    { id: 2, name: 'Sarah', role: 'User' },
    { id: 3, name: 'Mike', role: 'User' }
];

for (const { id, name, role } of users) {
    console.log(`${name} (ID: ${id}) has role: ${role}`);
}

// 3. Destructuring with regular expressions
function parseURL(url) {
    const regex = /^(https?:\/\/)?([\w\d\.-]+)\.([a-z\.]{2,6})(\/.*)?$/;
    const [, protocol = 'https://', domain, tld, path = ''] = regex.exec(url) || [];
    return { protocol, domain, tld, path };
}

const urlParts = parseURL('google.com/search');
console.log(urlParts); // { protocol: 'https://', domain: 'google', tld: 'com', path: '/search' }