/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @runtime O(n log n) sliding window + two-pointers
 */
 var threeSum = function(nums) {
    
    // base condition for forming triplets
    if (nums.length < 3) {
        return [];
    }
    
    
    let output = [];
    let [target, k, n] = [0, 0, nums.length];
        
    //[-1,0,1,2,-1,-4]
    //sort array in ascending order
    nums.sort((a,b) => a-b); // n-logn
    //[-4,-1,-1,0,1,2]
    //  k, i,.,.,.,j
    // array is sorted, stop when nums[k] > target, since numbers ahead will bigger.
    for(; k<(n-2) && nums[k]<= target; k++){ // n

        // two consecutive duplicates cannot make 3Sum zero
        if(k > 0 && nums[k-1]==nums[k]) continue;

        // create two-pointers
        let [i,j] = [ (k+1), (n-1)] // keeping them inbound
        
        while(i < j){ // n
            let sum = nums[i] + nums[j] + nums[k];

            if(sum < 0){
                //move towards greater vales
                i = i + 1;
            } else if(sum > 0){
                // move towards smaller values
                j = j - 1;
            } else {

                output.push([nums[i] , nums[j] , nums[k]]);
                i = i + 1;

                // i.e. [-4,-1,-1,-1,-1,-1,2] => [-1,-1,2] will be repeated, avoid this
                while(nums[i] === nums[i-1] && i < j)
                {
                    i = i + 1;
                }

            }
        }
    }
    
    return output;
};

// @lc code=end


threeSum([-1,0,1,2,-1,-4]);
