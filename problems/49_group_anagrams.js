/**
 * @param {string[]} strs
 * @return {string[][]}
 */

export const groupAnagrams = (strs) => {
  const res = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 97] += 1;
    }

    const key = count.join();

    if (res[key]) {
      res[key].push(str);
    } else {
      res[key] = [str];
    }
  }

  return Object.values(res);
};
