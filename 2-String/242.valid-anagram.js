/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @runtime O(n)
 * @space O(n)
 */
 var isAnagram = function(s, t) {
    
    if(s == null || t == null) return false;
    if(s.length !== t.length) return false;
    
    const map = new Map();
    // adding frequency for characters in map for string one
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }    
    }
    
    // checking if second string have same frequency
    for(let i = 0; i < t.length; i++){
        if(!map.has(t[i])) {
            return false;
        } else if(map.has(t[i])){   
            // if character is on map reduce frequency
            if(map.get(t[i]) > 0){
                map.set(t[i], map.get(t[i])-1);
                // if frequency becomes zero, remove key-value pair
                if(map.get(t[i]) === 0){
                    map.delete(t[i]);
                }
            }
        }
    }
    
    return true;
};
// @lc code=end

