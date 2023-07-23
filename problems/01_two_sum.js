// Solution 2: O(n) time, O(n) space
export const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (diff in obj) return [obj[diff], i];
    obj[n] = i;
  }
  throw new Error("No two sum solution");
};

// Solution 1: O(n2) time, O(1) space
export const twoSum_n2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
