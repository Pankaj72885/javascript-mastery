// 3. Best, Average, and Worst-Case Analysis

/*
Algorithms can behave differently depending on the input. We analyze three scenarios:

Best Case:
- The input causes the algorithm to perform the minimum number of operations.
- Example: Searching for the first element in an array (O(1)).

Average Case:
- The expected number of operations over all possible inputs.
- Often more complex to calculate, but gives a realistic expectation.

Worst Case:
- The input causes the algorithm to perform the maximum number of operations.
- Used most often in Big O analysis for guarantees.
*/

// Example: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
// Best case: Target is at index 0 (O(1))
// Average case: Target is in the middle (O(n/2)), simplified to O(n)
// Worst case: Target is not present or at the end (O(n))

// Example: Bubble Sort
function bubbleSort(arr) {
    let swapped;
    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Best case: already sorted (O(n))
    }
    return arr;
}
// Best case: Already sorted (O(n))
// Average and worst case: O(n^2)