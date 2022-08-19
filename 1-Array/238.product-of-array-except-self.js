/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * @runtime O(n)
 * @space O(n)
 */
 var productExceptSelf = function(nums) {
    
    if(nums.length ===0 || nums === null) return [];
    
    // filling answers array with Multiplicative identity
    let [prefix, postfix, LEN] = [1, 1, nums.length]
    let answers = Array(LEN).fill(1);
    
    for(let i = 0; i < LEN; i++){
        answers[i] = prefix;
        prefix *= nums[i];
    }
    
    
    for(let i = LEN-1; i >= 0; i--){
        answers[i] *= postfix;
        postfix *= nums[i]
    }
    
    return answers;
};
// @lc code=end

