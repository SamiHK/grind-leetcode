/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * T: O(n)
 * S: O(1)
 */
 var trap = function(height) {
    
    let left = 0;
    let right = height.length-1;
    let leftMax = 0
    let rightMax = 0;
    let result = 0;
    
    
    while(left <= right){
        let diff = 0;
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        
        if(height[left] < height[right]){
            diff = leftMax - height[left];
            left++
        } else {
            diff = rightMax - height[right];
            right--
        }
        
        result += diff;
    }
    
    return result;
};

// @lc code=end

