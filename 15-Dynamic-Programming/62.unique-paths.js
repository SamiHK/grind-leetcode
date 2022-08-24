/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * BRUTE FORCE: every time we will have two choice and everycall will be stored in call stack
 * T: O(2^(n+m)), S: O(2^(n+m));
 */
// var uniquePaths = function(m, n) {
    
    
//     if(m == 0 || n == 0) return 0; // base case
    
//     if(m == 1 && n == 1) return 1; // base case
    
//     let sum = 0;
    
//     // if we reach from start to bottom it will be same path as we go from bottom to right
//     // go right and go down IN INVERSE case is going up and going left
//     sum = uniquePaths(m-1, n) + uniquePaths(m, n-1);
    
//     return sum;
// };


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * MEMOIZATION: if the (m,n) position is visited before we will not go recursive here and one node will be visited only once
 * T: O(n*m), S: O(n*m);
 */
// var uniquePaths = function(m, n, visited={}) {
    
//     let key = String(m) + "," + String(n);
//     if(key in visited) return visited[key];
    
//     if(m == 0 || n == 0) return 0; // base case
//     if(m == 1 && n == 1) return 1; // base case
    
//     let sum = 0;
    
//     // if we reach from start to bottom it will be same path as we go from bottom to right
//     // go right and go down IN INVERSE case is going up and going left
//     sum = uniquePaths(m-1, n, visited) + uniquePaths(m, n-1, visited);
    
//     visited[key] = sum;
    
//     return sum;
// };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * TABULATION/KNAPSACK: we will visit the elements only once
 * T: O(n*m), S: O(n*m);
 */
 var uniquePaths = function(m, n) {
    
    // we create a table where m = 0 row and n = 0 column serves as starting points
    // create an array of length (m+1 X n+1) and fill zeroes
    
    // directly using Array()here will map one copy of array to all indexes and chaning one will change all
    //fill new arrays with 0
    const table = new Array(m+1).fill().map(() => Array(n+1).fill(0)); 
    
    table[1][1] = 1; // this will start as base case
    
    for(let i = 0; i <= m; i++){ // rows
        for(let j = 0; j<=n; j++){ // colums
            
            // get the current index value
            let current = table[i][j];
            
            // check if we can move right, if yes add current value to it
            if(j+1 <= n) table[i][j+1] += current;
            
            // check if we can down, if yes add current value to it.
            if(i+1 <= m) table[i+1][j] += current;
        }
    }
    
    
    return table[m][n];
};


// @lc code=end

