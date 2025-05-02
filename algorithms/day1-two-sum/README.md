###Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

---

## Two Sum - Complexity Analysis

### Brute Force Approach

- **Time Complexity**: O(n²) - Using two nested loops to check each pair
- **Space Complexity**: O(1) - Only using constant extra space

### Optimized Approach

- **Time Complexity**: O(n) - We traverse the list once, lookups in the hash table are O(1)
- **Space Complexity**: O(n) - The hash table can contain up to n elements in the worst case

### Approach Explained

The optimized solution uses a hash map to store each number and its index as we iterate through the array. For each element, we:

1. Calculate the complement (target minus current element)
2. Check if the complement exists in our map
3. If it does, we've found our pair
4. If not, add the current element to the map

This approach turns a search problem into a lookup problem, reducing time complexity from O(n²) to O(n).
