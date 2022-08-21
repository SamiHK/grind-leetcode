/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @runtime O(n)
 * @space O(n*n)
 */
// Recursive = DP Solution
var permute = function(nums, n = 0) {
    
    if (n >= nums.length) return [[]];
    
    const results = [];
    const perms = permute(nums, n + 1); // recursive calls till nums.length 
    
    console.log(perms);
    
    for (let perm of perms) {
        
        for (let i = 0; i <= perm.length; i++) {
            
            let p = perm.slice(0); // to avoid shallow copy of perm
            
            p.splice(i, 0, nums[n]);  // successively insert element n
            
            results.push(p);
        }
        
    }
    
    return results;
};

// backtrack solution
// var permute = function(nums) {
//     const res = [];
//     backtrack(nums, res);
//     return res;
// };

// function backtrack(nums, res, n = 0) {
//     if (n === nums.length - 1) {
//         res.push(nums.slice(0));
//         return;
//     }
//     for (let i = n; i < nums.length; i++) {
//         // change combination
//         [nums[i], nums[n]] = [nums[n], nums[i]];
//         // backtrack
//         backtrack(nums, res, n + 1);
//         // undo combination change
//         [nums[i], nums[n]] = [nums[n], nums[i]];
//     }
// }


// Queue Solution
// var permute = function(nums) {
    
//     const result = [];
//     const queue = [];
    
//     queue.push([[], nums]); 
//     console.log(queue);
//     while(queue.length){
        
//         const [currSeq, availNums] = queue.shift(); // for loop termination
        
//         if(availNums.length === 0)
//         {
//             result.push(currSeq);
//             continue;
//         }
            
        
//         for(let i = 0; i < availNums.length; i++)
//         {
//             const number = availNums[i];
//             queue.push([
//                 [...currSeq, number], 
//                 [...availNums.slice(0, i), ...availNums.slice(i + 1)]
//             ]); 
//             console.log(queue);
//         }   
//     }
    
//     return result;
// };






// @lc code=end

