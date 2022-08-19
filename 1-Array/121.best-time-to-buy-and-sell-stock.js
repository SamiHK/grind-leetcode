/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * @runtime O(n) - sliding window + two pointers
 * @space O(1)
 */
 var maxProfit = function(prices) {
    
    // check edge cases
    if(prices === null || prices.length === 0) return -1;
    
    // assign pointers
    let [left, right, length] = [0, 1, prices.length];
    
    // net profit initialized as zero
    let netProfit = 0;
    
    // sliding window approach PLUS two-pointers approach
    // window starts from first two elements and expands, pointers change to maximize profit 
    while(right < length)
    {
        if(prices[left] > prices[right]){
            // if at the right corner, we are making loss
            // shift right
            left = right;
        } else {
            netProfit = Math.max(netProfit, (prices[right] - prices[left]) );
        }
        // shift to right 
        right = right + 1;
    }
    
    return netProfit;
};
// @lc code=end

