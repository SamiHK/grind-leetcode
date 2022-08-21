/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * @runtime O(log n)
 * @space O(1)
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let low = 1;
        let high = n;
        let mid = null;
        
        while (low <= high) {  
          mid = Math.floor((low + high) / 2);
          if (!isBadVersion(mid)) low = mid + 1;
          else high = mid - 1;
        }
        
        return low; 
        
        // since lowest it can be the fisrt one
        
        // mid = l + Math.floor((r-l))/2 // Wrong answer for Interger Overflow
        
        // NOTE: since we're using JavaScript. The 2^31 - 1 limit (problem constraints listed in the description) would only break bitwise and shift operators in JS if we exceed              it. Seeing as we don't use any here, we're good to go. MAX_SAFE_INTEGER in JS is 2 ** 53 - 1 because JS uses 64 bit integers.
    };
};
// @lc code=end

