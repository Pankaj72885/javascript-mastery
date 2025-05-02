# Big O Notation

## What is Big O?
- Mathematical notation to describe the time or space complexity of an algorithm
- Describes worst-case scenario
- Focuses on how algorithm scales rather than actual time measurements

## Common Complexities
- O(1): Constant time - performance doesn't change with input size
  - Example: Array access by index

- O(log n): Logarithmic time - divides problem in half each time
  - Example: Binary search

- O(n): Linear time - performance scales linearly with input
  - Example: Linear search

- O(n log n): Log-linear time
  - Example: Efficient sorting algorithms like mergesort

- O(n²): Quadratic time - typically nested loops
  - Example: Bubble sort

- O(2ⁿ): Exponential time - exhaustive search
  - Example: Recursive calculation of Fibonacci numbers

## Analyzing Complexity
1. Identify the basic operations
2. Count how many times each operation executes relative to input size
3. Eliminate non-dominant terms and constants