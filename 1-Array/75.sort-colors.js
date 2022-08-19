/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @runtime O(n) - Two pointers + since there are only three items to sort and lowest one should be on start and highest one should be in the end, no need to check middle one, when lowest and highest are sorted everything will be sorted.
 * @space O(1)
 */
 var sortColors = function(nums) {
  
    if(nums === null || nums.length === 0) return -1;
    
    /** 
    //https://en.wikipedia.org/wiki/Dutch_national_flag_problem
    This is a dutch partitioning problem. We are classifying the array into four groups: red, white, unclassified, and blue. Initially       we group all elements into unclassified. We iterate from the beginning as long as the white pointer is less than the blue pointer.
    
    If the white pointer is red (nums[white] == 0), we swap with the red pointer and move both white and red pointer forward. If the         pointer is white (nums[white] == 1), the element is already in correct place, so we don't have to swap, just move the white pointer     forward. If the white pointer is blue, we swap with the latest unclassified element.
    
    **/
    let [red, white, blue] = [0, 0, nums.length-1]
    
    while(white <= blue) {
        
        if(nums[white] == 0){
            [nums[red], nums[white]] = [nums[white], nums[red]];
            white++;
            red++;
        }else if(nums[white] == 1){
            white++;
        }else{
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--;
        }
    }
    
    return nums;
};
// @lc code=end

