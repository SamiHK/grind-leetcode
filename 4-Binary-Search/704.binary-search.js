/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @runtime O(log n)
 * @space O(1)
 */
 var search = function(nums, target) {
  
    if(nums === null || nums.length === 0) return -1
    
    let [low, high] = [0, nums.length-1];
    
    let mid = low + Math.floor((high-low+1)/2);
    
    for(let i = 0; i < nums.length; i++){
            
        if(target == nums[mid]){
            return mid;
        } else if(target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        
        mid = low + Math.floor((high-low+1)/2);
    }
    
    return -1;
    
};
// @lc code=end

