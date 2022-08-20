/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @runtime O(2^N)
 */
 function combinationSum(candidates, target) {
    var buffer = [];
    var result = [];
    search(0, target);
    return result;
  
    function search(startIdx, target) {
      //buffer is an array which is reference type. 
      //If we push buffer instead of buffer.slice(), 
      //the items in the buffer will alter in the following operations.

      // Applying base-case
      if (target === 0) return result.push(buffer.slice());
      if (target < 0) return;
      if (startIdx === candidates.length) return;

      //way forward to add combinations
      buffer.push(candidates[startIdx]);
      search(startIdx, target - candidates[startIdx]);
      //way backward to backtrach and empty memory
      buffer.pop();
      search(startIdx + 1, target);
    }
  }

// -> PATH SUM LOGIC
//  var combinationSum = function(candidates, target) {
    
//     const combs = []
//     const tempCombs = []
    
//     function DFS(index) {     
        
//         // base cases
//         if (target < 0) return
//         if (target === 0) combs.push([...tempCombs])
        
//         // DFS
//         while (candidates[index]) {
            
//             tempCombs.push(candidates[index])
//             target -= candidates[index]
            
//             DFS(index)
            
//             target += candidates[index]
//             tempCombs.pop()
//             index++
//         }
//     }
    
//     DFS(0)
//     return combs;
// };

// combinationSum([2,3,5], 8) // debugger
// @lc code=end

