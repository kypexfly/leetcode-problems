import { describe, expect, it } from "vitest";
import { topKFrequent } from "../problems/347_topKFrequent";

describe("topKFrequent function", () => {
  const testCases = [
    {
      nums: [1, 1, 1, 2, 2, 3],
      k: 2,
      expected: [1, 2],
    },
    {
      nums: [1],
      k: 1,
      expected: [1],
    },
  ];

  testCases.forEach(({ nums, k, expected }) => {
    it(`should return ${expected} for nums = "${nums}" and k = "${k}"`, () => {
      const result = topKFrequent(nums, k);
      expect(result).toStrictEqual(expected);
    });
  });
});
