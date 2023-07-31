/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) time, O(1) space
export const productExceptSelf = (nums) => {
  const result = [];

  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = temp;
    temp *= nums[i];
  }

  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= nums[i];
  }

  return result;
};
