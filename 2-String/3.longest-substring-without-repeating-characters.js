/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @runtime O(n) - length of string
 * @space O(m) - longest repeating substring(m), m can be n, m=n is possible.
 */
 var lengthOfLongestSubstring = function(s) {
  
    if(s === null) return null;
    if(typeof(s) != "string" || s.length === 0) return 0
    if(s.length === 1) return 1;
    
    let [left, right, length, charSet] = [0, 0, s.length, new Set()];
    let max = 0;
    
    while(right < length){
        
        
        // if character repeats we need to delete charset from left untill it no longer exist
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left += 1;
        }

        max = Math.max(max, right-left+1);
        charSet.add(s[right]);
        right += 1;
    }
    
    return max;
};
// @lc code=end


//"abcabcbb"
// "bbbbb"
// "pwwkew"