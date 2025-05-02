// ========================================================
// Spread and Rest Operators
// ========================================================

// Both use the same syntax (...) but serve different purposes
// Spread: Expands an array or object
// Rest: Collects multiple elements into an array

// ========================================================
// Spread Operator with Arrays
// ========================================================

// 1. Copying arrays
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // [1, 2, 3]

// Proof that it's a new array (deep copy)
originalArray.push(4);
console.log(originalArray); // [1, 2, 3, 4]
console.log(copyArray);     // [1, 2, 3] - remains unchanged

// 2. Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Traditional way with concat
const mergedTraditional = array1.concat(array2);
console.log(mergedTraditional); // [1, 2, 3, 4, 5, 6]

// Using spread operator
const mergedWithSpread = [...array1, ...array2];
console.log(mergedWithSpread); // [1, 2, 3, 4, 5, 6]

// 3. Creating arrays with additional elements
const numbers = [1, 2, 3];
const numbersWithMore = [...numbers, 4, 5, 6];
console.log(numbersWithMore); // [1, 2, 3, 4, 5, 6]

// Insert elements in the middle
const insertedMiddle = [1, 2, ...numbers, 4, 5];
console.log(insertedMiddle); // [1, 2, 1, 2, 3, 4, 5]

// 4. Converting string to array of characters
const str = 'Hello';
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// 5. Using with Math functions
const numbersToFind = [5, 12, 8, 130, 44];
console.log(Math.max(...numbersToFind)); // 130

// ========================================================
// Spread Operator with Objects
// ========================================================

// 1. Copying objects
const originalPerson = { name: 'John', age: 30 };
const copiedPerson = { ...originalPerson };
console.log(copiedPerson); // { name: 'John', age: 30 }

// 2. Merging objects
const personBasicInfo = { name: 'Alice', age: 28 };
const personJobInfo = { job: 'Developer', company: 'Tech Corp' };

const completePerson = { ...personBasicInfo, ...personJobInfo };
console.log(completePerson);
// { name: 'Alice', age: 28, job: 'Developer', company: 'Tech Corp' }

// 3. Overriding properties
const defaultSettings = { theme: 'light', fontSize: 12, showSidebar: true };
const userSettings = { theme: 'dark' };

const appliedSettings = { ...defaultSettings, ...userSettings };
console.log(appliedSettings);
// { theme: 'dark', fontSize: 12, showSidebar: true }

// Order matters - last spread wins for duplicate properties
const incorrectSettings = { ...userSettings, ...defaultSettings };
console.log(incorrectSettings);
// { theme: 'light', fontSize: 12, showSidebar: true }

// 4. Adding new properties while copying
const product = { name: 'Laptop', price: 999 };
const productWithDiscount = {
    ...product,
    discountPrice: product.price * 0.9
};
console.log(productWithDiscount);
// { name: 'Laptop', price: 999, discountPrice: 899.1 }

// ========================================================
// Rest Parameter
// ========================================================

// 1. Collecting function arguments

// Traditional way with arguments object (not an array, limited functionality)
function sumTraditional() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumTraditional(1, 2, 3, 4)); // 10

// Using rest parameter (creates a real array with full array methods)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 2. Combining regular parameters with rest parameter
function displayInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}

displayInfo('Sarah', 25, 'Reading', 'Hiking', 'Photography');
// Name: Sarah, Age: 25
// Hobbies: Reading, Hiking, Photography

// 3. Rest parameter in array destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]

// 4. Rest parameter in object destructuring
const { name: personName, ...otherDetails } = {
    name: 'Mike',
    age: 32,
    job: 'Designer',
    city: 'New York'
};

console.log(personName);    // Mike
console.log(otherDetails);  // { age: 32, job: 'Designer', city: 'New York' }

// ========================================================
// Common Use Cases
// ========================================================

// 1. Function that forwards all arguments to another function
function logAndSum(...args) {
    // Log the arguments
    console.log('Arguments:', args);
    // Forward all arguments to the sum function
    return sum(...args);
}

console.log(logAndSum(1, 2, 3, 4, 5)); // Arguments: [1, 2, 3, 4, 5], Result: 15

// 2. Creating a wrapper function with additional parameters
function validateAndProcess(validator, processor, ...data) {
    if (validator(...data)) {
        return processor(...data);
    }
    return 'Invalid data';
}

const isAllNumbers = (...values) => values.every(val => typeof val === 'number');
const multiply = (...numbers) => numbers.reduce((result, num) => result * num, 1);

console.log(validateAndProcess(isAllNumbers, multiply, 2, 3, 4)); // 24
console.log(validateAndProcess(isAllNumbers, multiply, 2, 'three', 4)); // Invalid data