import { describe, it, expect } from "vitest";
import { twoSum } from "../problems/01_two_sum";

describe("twoSum function", () => {
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ];

  testCases.forEach(({ nums, target, expected }) => {
    it(`should return [${expected}] for nums = [${nums}] and target = ${target}`, () => {
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });
});
