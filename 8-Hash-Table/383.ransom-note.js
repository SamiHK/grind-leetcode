/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @runtime O(n)
 * @space O(n)
 */
 var canConstruct = function(ransomNote, magazine) {
    
    if(ransomNote.length > magazine.length) return false;
    if(ransomNote.length == magazine.length && ransomNote == magazine) return true;
    
    let map = {};
    
    for(let i = 0; i < magazine.length; i++){
        if(map[magazine[i]]){
            let freq = map[magazine[i]];
            map[magazine[i]] = freq + 1;
        } else {
            map[magazine[i]] = 1;
        }
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        
        if(map[ransomNote[i]]){
            
            let freq = map[ransomNote[i]];
            
            if(freq == 0) return false;
            else map[ransomNote[i]] =freq - 1;
            
        } else {
            return false;
        }
    }
    
   
    return true;
};

//"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// "dehifb"
// "hhjdgjbhahaagihhhhhajjibjffhijehda"
// "dehifb"
// "hhjdgjbhahaagihhhhhajjibjffhijehda"
// "fihjjjjei"
// "hjibagacbhadfaefdjaeaebgi"
// "a"
// "b"
// "aa"
// "ab"
// "aa"
// "aab"


// @lc code=end

