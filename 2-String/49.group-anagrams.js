/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 * @runtime O(n) - 0(26n)
 * @space O(n)
 */
 var groupAnagrams = function(strs) {
    
    if(strs === null) return [];
    if(strs.length === 0) return [strs];
    
    let map = new Map();
    for(let i = 0; i< strs.length; i++){
        
        const hashT = createHashTable(strs[i]) + "";
        if(map.has(hashT)) {
            map.get(hashT).push(strs[i])
        } else {
            map.set(hashT, [strs[i]]);
        }
    }
    
    return [...map.values()]
};


var createHashTable = (s) => {
    // ASCII: [a-z = 97-122], [A-Z = 65-90], [0-9 = 48-57]
    // creating array to fit small letters with initial 0 frequency
    const arr = new Array(26).fill(0);
    const ASCII_a = 'a'.charCodeAt(0);
    for(let i=0; i < s.length; i++) {
        const hash = s.charAt(i).charCodeAt(0) - ASCII_a;
        arr[hash] = ++arr[hash];
    }
    return arr;
}
// @lc code=end

