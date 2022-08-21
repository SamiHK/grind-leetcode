/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
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
    
    let output = -1
    if(nums === null ) return -1;
    if(nums.length === 1 && nums[0] !== target) return -1;
    if(nums.length === 1 && nums[0] === target) return 0;
    
    let low = 0;
    let high = nums.length-1;
    
    let mid = null;
    
    while(low < high){
        mid = Math.floor((low + high) / 2);
        
        if(nums[mid] === target) return mid;
        if(nums[low] === target) return low;
        if(nums[high] === target) return high;
        
        // check rotation condition for low point
        // since array is in inceasing order mid should be greater than first one, else it is a rotated array. 
        // If target is lesser than mid then it is between mid and low and array is rotated here
        if(nums[mid] > target && nums[low] > target && nums[mid] > nums[low]) {
            low = mid + 1;
            continue;
        }
        
        // check rotation condition for high point
        // since array is in inceasing order mid should be less than last one, else it is a rotated array. 
        // If target is greater than mid then it is between mid and high and array is rotated here
        if(nums[mid] < target && nums[high] < target && nums[mid] < nums[high]){
            high = mid - 1;
            continue;
        }
        
        // check usual binary search conditions
        if(nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
        
    }
    
    return output
};


/**

[4,5,6,7,8,1,2,3]
8
[4,5,6,7,0,1,2]
0
[4,5,6,7,0,1,2]
3
[1]
0
[1]
1


var search = function(nums, target) {
    
    if(nums === null ) return -1;
    if(nums.length === 1 && nums[0] !== target) return -1;
    if(nums.length === 1 && nums[0] === target) return 0;
    
    return binarySearch(nums, 0, (nums.length-1), target);

};

const binarySearch = (nums, low, high, target) => {
    
    while (low < high) {
        
        if(nums[high] === target) return high;
        if(nums[low] === target) return low;
        
        let mid = Math.floor(low + (high-low)/2);
        if(nums[mid] === target) return mid;
        
        if(nums.length > 2) {
            // in one execution we checked two elements, in log(n)
            return binarySearch(nums, (low + 1), (high-1), target);
        } else {
            // low, high, mid are already checked
            return -1;
        }
        
    }
    
    return -1;
};

**/
// @lc code=end

