/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// Time O(3^N * 4^M)
//   N is the number of digits in the input that maps to 3 letters (e.g. 2, 3, 4, 5, 6, 8)
//   M is the number of digits in the input that maps to 4 letters (e.g. 7, 9)
// Space O(3^N * 4^M) since one has to keep O(3^N * 4^M) solutions.

const letterCombinations = (digits) => {
    if (digits == null || digits.length === 0) return [];
  
    const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
    };
  
    const res = [];
    const go = (i, s) => {
      if (i === digits.length) {
        res.push(s);
        return;
      }
  
      for (const c of map[digits[i]]) {
        go(i + 1, s + c);
      }
    };
  
    go(0, '');
    return res;
  };
// @lc code=end

