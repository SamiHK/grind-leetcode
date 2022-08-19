/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // handling edge cases
    if(target > Infinity || target < -Infinity || nums === null) return -1;
    if(nums.length < 2) return [];
    
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        
        let diff = target - nums[i]; //[7,2,-2,-6]
        
        // check if number exist in map
        if(map.has(String(nums[i]))){
            // that means a number with difference that makes target exist
            return [map.get(String(nums[i])), i]
            
        } else {
            // store the difference with index value
            map.set(String(diff), i);
        }
    }
    
    return [];
};
// @lc code=end

