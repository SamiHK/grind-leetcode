/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @runtime O(n) - one pass of loop + one pass of map values
 * @space O(n) - map
 */
 var longestPalindrome = function(s) {
  
    if(s== null) return -1;
    if(s.length === 1) return 1;
    
    // we will store the frequency of the characters, N-evens and 1 odd will be max palindrome
    const map = new Map();
    let longestPalindrome = 0;
    
    // setting character frequency in case-sensitive keys.
    for(let i = 0; i < s.length; i++){

        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }        
    }
    
    
    // checking all map values for even and an odd frequency
    let haveOdd = 0;
    map.forEach((value) => { 
        if(value % 2 === 0) {
            longestPalindrome += value;
        } else if(value % 2 !== 0){
            longestPalindrome += (value-1) // if value is 9 we can use 8 of them in palindrome
            haveOdd = 1; // always only 1 odd can be in middle of palindrome
        }
    });
    
    return longestPalindrome + haveOdd;
};
// @lc code=end

