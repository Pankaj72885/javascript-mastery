// 4. How to Analyze Your Code's Complexity

/*
Analyzing code complexity involves:
1. Identifying loops and nested loops (look for O(n), O(n^2), etc.)
2. Checking for recursive calls (can lead to exponential complexity)
3. Considering both time and space usage
4. Focusing on the worst-case scenario
5. Dropping constants and lower-order terms in Big O notation
*/

// Example: Analyze the following function
function exampleFunction(arr) {
    let sum = 0; // O(1) space
    for (let i = 0; i < arr.length; i++) { // O(n) time
        sum += arr[i];
    }
    return sum;
}
// Time Complexity: O(n) (one loop over n elements)
// Space Complexity: O(1) (only a few variables)

// Example: Nested loops
function countPairs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] !== arr[j]) count++;
        }
    }
    return count;
}
// Time Complexity: O(n^2) (nested loops)
// Space Complexity: O(1)

// Tips:
// - Look for nested loops (quadratic or worse)
// - Watch for recursion (especially if it branches)
// - Consider extra data structures (arrays, objects)
// - Always simplify Big O (drop constants, lower terms)