/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * @runtime O(n) - string match + half-way execution of all characters
 * @space O(1)
 */
 var isPalindrome = function(s) {
    
    if(s === null || s.length ===0) return -1;
    
    s = s.toLowerCase();
    
    const regex = /[a-z0-9]/g; // Alphanumeric Regex
    
    s = s.match(regex); // only Alphanumeric characters array
        
    // <-- shorthand method -->
    // if you want to save another variant of string save a deep-copy, shallow copy will always match as reverse()
    // will reverse it as well.
    // if(s == null || s.join("") === s.reverse().join("")){
    //     return true;
    // }
    
    if(s=== null || s.length === 1) return true;
    
    let [left, right] = [0, s.length-1];
    while(left <= right) {
        
        if(s[left] === s[right]){
            left++;
            right--;
        } else {
            return false
        }
        
    }
    
    // if all characters match till mid-way
    return true;
};
// @lc code=end

