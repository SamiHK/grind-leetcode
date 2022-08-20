/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * @runtime O(n)
 * @space O(n)
 */
 var containsDuplicate = function(nums) {
    
    if(nums === null || nums.length ===0) return false;
    
    let set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(String(nums[i]))) return true;
        else set.add(String(nums[i]));
    }
    return false;
};
// @lc code=end

