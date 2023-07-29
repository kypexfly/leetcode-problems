/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

export const topKFrequent = (nums, k) => {
  const freq = {};

  // key: value  value: counter
  for (let num of nums) {
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num] = freq[num] + 1;
    }
  }

  const freqArray = [];

  // tuple of [counter, value]
  for (let key in freq) {
    freqArray.push([freq[key], key]);
  }

  freqArray.sort((a, b) => b[0] - a[0]);

  return freqArray.map((item) => Number(item[1])).slice(0, k);
};
