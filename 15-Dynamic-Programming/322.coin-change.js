/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * BRUTE FORCE
 */
 var coinChange = function(coins, amount, memo = {}) {
    
    if(amount in memo) return memo[amount];
    if(amount === 0) return 0;
    if(amount < 0) return -1;
    
    let shortestCombination = -1;
    
    for(let coin of coins){
        
        let remainder = amount - coin;
        let remainderCombination = coinChange(coins, remainder, memo);
        
        if(remainderCombination !== -1){ // target found
            const combination = remainderCombination+1;
            
            if(shortestCombination === -1){
                shortestCombination = combination;
                continue;
            }
            
            if(shortestCombination > combination){
                shortestCombination = combination
            }
        }
    }
    memo[amount] = shortestCombination;
    return shortestCombination;
};

// remove from target each node and see remainder
//             11
//         /   |  \
//        10   9    6
//                 / | \
//                5  4  1
//                 \    /
//                  0   0                          
    
// shortest is [5,1,5] OR [5,5,1]
// @lc code=end

