/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @runtime O(N*N)
 * @runtime O(N*N)
 */
 var subsets = function(nums) {
    
    const powerset = [];
    
	generatePowerset([], 0);
    
    /** Recursive Function **/
	function generatePowerset(path, index) {
        
        // console.log(path, index, powerset);
        
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
            // pushing previous path and current number as an array, and moving to next index
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
};
// @lc code=end

