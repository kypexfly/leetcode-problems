import { describe, expect, it } from "vitest";
import { containsDuplicate } from "../problems/217_contains_duplicate";

describe("contains duplicate function", () => {
  const testCases = [
    {
      nums: [1, 2, 3, 1],
      expected: true,
    },
    {
      nums: [1, 2, 3, 4],
      expected: false,
    },
    {
      nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      expected: true,
    },
  ];

  testCases.forEach(({ nums, expected }) => {
    it(`should return ${expected} for nums = [${nums}]`, () => {
      const result = containsDuplicate(nums);
      expect(result).toBe(expected);
    });
  });
});
