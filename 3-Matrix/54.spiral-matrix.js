/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @runtime O(n)
 * @space O(n)
 */
 var spiralOrder = function(matrix) {
    
    let result = [];
    if (matrix.length === 0) return result;

    // [add first row in result] no need to check the first row {topLeft-> topRight} i.e. {1,1 -> 1,0}
    result = matrix[0];  
    if (matrix.length === 1) return matrix[0];

    // direction offsets
    let directions = [[1, 0], [0, -1], [-1, 0], [0, 1]];  
    let d = 0; // direction index
    let m = matrix.length; // rows
    let n = matrix[0].length; // columns
    let pos = [0, n - 1]; // start from the topRight corner
    let i = (m - 1) * n;  // number of the unvisited elements

    while (i > 0) {
        
        
        for (let j = 1; j < m; j++) {
            i--;
            pos[0] += directions[d][0]; 
            pos[1] += directions[d][1];

            result.push(matrix[pos[0]][pos[1]]);
        }

        m--;  // decrease the size of row or column
        [m, n] = [n, m];  // switch horizontal and vertical modes
        
        d = (d + 1) % 4;  // loop between direction offsets
    }
    
    return result;
}
    
// @lc code=end

// [[1,2,3],[4,5,6],[7,8,9]]
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// [[1,2,3,4],[5,6,7,8],[5,6,7,8],[9,10,11,12]]

