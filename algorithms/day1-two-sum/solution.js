// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Brute force approach - O(n²)
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Optimized approach - O(n)
function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]