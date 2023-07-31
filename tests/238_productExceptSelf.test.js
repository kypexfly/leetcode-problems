import { describe, expect, it } from "vitest";
import { productExceptSelf } from "../problems/238_productExceptSelf";

describe("productExceptSelf function", () => {
  const testCases = [
    {
      nums: [1, 2, 3, 4],
      expected: [24, 12, 8, 6],
    },
    {
      nums: [-1, 1, 0, -3, 3],
      expected: [-0, 0, 9, -0, 0],
    },
  ];

  testCases.forEach(({ nums, expected }) => {
    it(`should return ${expected} for nums = [${nums}]`, () => {
      const result = productExceptSelf(nums);
      expect(result).toEqual(expected);
    });
  });
});
