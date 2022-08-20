/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * @runtime O(n)
 * @space O(combinations)
 */
 /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * @runtime O(n) * O(combinations)
 * @space O(combinations)
 */
  var minWindow = function(s, t) {
    
    let arr = new Array(128).fill(0); // Ascii characters array to store count
    let result = [-Infinity, Infinity]; // result not yet known
    let missing = t.length; // missing words initially
    
    // increase the count in arr
    for(let i=0; i < t.length; i++){
        arr[t.charCodeAt(i)]++
    }
     
     
    let [start, end, length] = [0, 0, s.length];
     
    for(end; end < length; end++){
        
        // s[end] element present in t then decrese missing
        if(arr[s.charCodeAt(end)] > 0){
            missing--;
        }
        
        // if not present in t then make it negative
        arr[s.charCodeAt(end)]--; 
        
        // start decrementing start to check the best option
        while(missing == 0){ 
            // store the best answer always
            if(result[1]-result[0] > end - start){
                result[1] = end; 
                result[0] = start;
            }
            
           
            arr[s.charCodeAt(start)]++;
            
            // if the char is present in t
            if(arr[s.charCodeAt(start)] > 0){
                missing++;
            }
          
            start++;
        }
        
        
    }
    
    return result[1] == Infinity ? "" : s.slice(result[0], result[1]+1);
    
};
// @lc code=end

// "cabwefgewcwaefgcf"
// "cae"
// "a"
// "b"
// "abc"
// "ac"
// "ADOBECODEBANC"
// "ABC"
// "ABC"
// "ABCD"
// "ABCDE"
// "ABC"




// console.log(minWindow("ADOBECODEBANC", "ABC"));
// "ADOBECODEBANC"
// "ABC"
// "ABC"
// "ABCD"
// "ABCDE"
// "ABC"


// "ADOBECODEBANC"
// "ABC" <- output sample;
// T-HASH: 1110000000000000000000000000000000000000000000000000 = ABC
// S-HASH SMALLER: 1001000000000010000000000000000000000000000000000000 = ADO, missing BC, move right
// S-HASH SMALLER: 1101000000000010000000000000000000000000000000000000 = ADOB, missing C, move right
// S-HASH SMALLER: 1101100000000010000000000000000000000000000000000000 = ADOBE, missing C, move right
// S-HASH LARGER: 1111100000000010000000000000000000000000000000000000 = ADOBEC, minimum, move left  
// S-HASH SMALLER: 0111100000000010000000000000000000000000000000000000 = DOBEC, missing A, move right 
// S-HASH SMALLER: 0111100000000020000000000000000000000000000000000000 = DOBECO, missing A, move right  
// S-HASH SMALLER: 0112100000000020000000000000000000000000000000000000 = DOBECOD, missing A, move right 
// S-HASH SMALLER: 0112200000000020000000000000000000000000000000000000 = DOBECODE, missing A, move right 
// S-HASH SMALLER: 0212200000000020000000000000000000000000000000000000 = DOBECODEB, missing A, move right 
// S-HASH LARGER: 1212200000000020000000000000000000000000000000000000 = DOBECODEBA, not minimum, move left 
// S-HASH LARGER: 1211200000000020000000000000000000000000000000000000 = OBECODEBA, not minimum, move left 
// S-HASH LARGER: 1211200000000010000000000000000000000000000000000000 = BECODEBA, not minimum, move left
// S-HASH LARGER: 1111200000000010000000000000000000000000000000000000 = ECODEBA, not minimum, move left
// S-HASH LARGER: 1111100000000010000000000000000000000000000000000000 = CODEBA, already same minimum, move left
// S-HASH SMALLER: 1101100000000010000000000000000000000000000000000000 = ODEBA, missing C, move right
// S-HASH SMALLER: 1101100000000110000000000000000000000000000000000000 = ODEBAN, missing C, move right
// S-HASH LARGER: 1111100000000110000000000000000000000000000000000000 = ODEBANC, not minimum, move left
// S-HASH LARGER: 1111100000000100000000000000000000000000000000000000 = DEBANC, not minimum, move left
// S-HASH LARGER: 1110100000000100000000000000000000000000000000000000 = EBANC, minimum, move left
// S-HASH LARGER: 1110000000000100000000000000000000000000000000000000 = BANC, minimum, move left <- final minumum
// S-HASH SMALLER: 1010000000000100000000000000000000000000000000000000 = ANC, minimum, move left(exhausted loop end)


