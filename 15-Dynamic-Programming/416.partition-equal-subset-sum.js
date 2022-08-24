/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    
    let sum = 0 
    for (let num of nums) {
        sum += num
    }
    
    if(sum % 2 === 1) return false;
    else sum /=2 // partition  // 11
    
    // create DP and fill with false, 1 more case for base case.
    let dp = new Array(sum+1).fill(false);
    
    // base case, if sum is zero
    dp[0] = true;
    
    for (let num of nums) {
        for (let i = sum; i > 0; i--) {
            if (i >= num) { 
                dp[i] = dp[i] || dp[i-num];
                // 11>=1-> true || 11>=5-> true || 11>=11 -> true || 11>=5-> true
                // (i-num) lets say num = 11, i=11, i-num = 0,  then dp[i] is true as [ dp[11](false) || dp[0](true)]
                // (i-num) lets say num = 1, i=11, i-num = 10,  then dp[i] is false as [ dp[11](false) || dp[10](false)]
            }
        }
    }
    
    return dp[sum];
};
// @lc code=end

