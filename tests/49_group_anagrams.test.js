import { describe, expect, it } from "vitest";
import { groupAnagrams } from "../problems/49_group_anagrams";

describe("groupAnagrams function", () => {
  const testCases = [
    {
      strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    },
    {
      strs: [""],
      expected: [[""]],
    },
    {
      strs: ["a"],
      expected: [["a"]],
    },
  ];

  testCases.forEach(({ strs, expected }) => {
    it(`should group the anagrams in [${strs}] correctly`, () => {
      const result = groupAnagrams(strs);
      expect(result).toEqual(expected);
    });
  });
});
