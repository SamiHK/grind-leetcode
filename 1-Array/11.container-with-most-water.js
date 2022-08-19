/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * @runtime O(n)
 * @space O(1)
 */
 var maxArea = function(height) {
    
    if(height === null || height.length === 0 || height.length === 1) return -1;
    
    let [left, right] = [0, height.length-1];
    let maxArea = 0;
    
    while(left < right) {

        area = [right-left] * ( (height[left] < height[right]) ? height[left] : height[right]);
        if(area > maxArea) maxArea = area;
        
        if(height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
};
// @lc code=end

