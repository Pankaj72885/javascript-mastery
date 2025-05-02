// 2. Common Complexities: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)

/*
O(1) - Constant Time:
- Operation takes the same amount of time regardless of input size.
- Example: Accessing an array element by index.
*/
function getFirst(arr) {
    return arr[0]; // O(1)
}

/*
O(log n) - Logarithmic Time:
- Operations that cut the problem size in half each time.
- Example: Binary search in a sorted array.
*/
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

/*
O(n) - Linear Time:
- Operations that go through each element once.
- Example: Finding an element in an unsorted array.
*/
function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

/*
O(n log n) - Linearithmic Time:
- Common in efficient sorting algorithms like merge sort.
*/
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

/*
O(n²) - Quadratic Time:
- Nested loops over the data.
- Example: Bubble sort.
*/
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/*
O(2^n) - Exponential Time:
- Operations that double with each additional input.
- Example: Calculating Fibonacci numbers recursively.
*/
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}