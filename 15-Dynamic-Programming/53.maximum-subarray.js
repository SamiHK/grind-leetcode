/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * T: O(n), S: O(1)
 */
 var maxSubArray = function(nums) {
    
    if(nums.length === 0) return [];
    if(nums.length === 1) return nums[0];
    
    let currSum = 0;
    let maxSum = nums[0];
    
    for(num of nums){
        
        // if current sum is -ve then adding this will not make sum larger
        if(currSum < 0) currSum = 0;
        
        currSum = currSum + num;
        if(currSum > maxSum) maxSum = currSum;
    }
    
    
    return maxSum;
};
// @lc code=end

