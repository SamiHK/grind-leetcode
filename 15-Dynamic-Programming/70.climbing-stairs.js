/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * R: O(n), S: O(n)
 */
 var climbStairs = function(n) {
  
    if(n == null) return null;
    if(n < 3) return n;
    
    let dp = new Array(n).fill(0)
    dp[0] = 1;
    dp[1] = 2;
    
    for(let k = 2; k < arr.length; k++){
        dp[k] = dp[k-1] + dp[k-2];
    }
    
    return dp[n-1]
};

// R: O(2^h) -> number of nodes of BST, S: O(2^h) -> call stack
// It becomes BT every element will create two elements. Nodes of BST = 2(pow(h)-1)
// var climbStairs = function(n) {
  
//     if(n == null) return null;
//     if(n < 3) return n;

//     return (climbStairs(n-1) + climbStairs(n-2))
// };
// @lc code=end

