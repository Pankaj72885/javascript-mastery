// 1. Time Complexity vs Space Complexity

/*
Time Complexity:
- Measures how the runtime of an algorithm grows with input size
- Expressed in Big O notation (e.g., O(n), O(n²), O(log n))
- Focuses on number of operations performed

Space Complexity:
- Measures how much additional memory an algorithm needs
- Also expressed in Big O notation
- Includes both auxiliary space and input space

Key Differences:
1. Time complexity focuses on processing time/operations
2. Space complexity focuses on memory usage
3. Sometimes trading space for time or vice versa
4. Both are crucial for algorithm efficiency
*/

// Example: Time Complexity (O(n))
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Runs n times
    }
    return sum;
}

// Example: Space Complexity (O(n))
function createArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i); // Uses extra space proportional to n
    }
    return arr;
}

// Example: Time Complexity O(1), Space Complexity O(1)
function getFirstElement(arr) {
    return arr[0]; // Always one operation, no extra space
}