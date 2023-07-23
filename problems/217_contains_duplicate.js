// O(n) time, O(n) space
export const containsDuplicate = (nums) => {
  const set = new Set(nums);
  return set.size != nums.length;
};
