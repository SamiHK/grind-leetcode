/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * @runtime O(1)
 * @space O(1)
 */
 var addBinary = function(a, b) {
    const aBin = `0b${a}`;
    const bBin = `0b${b}`;
    
    let sum = BigInt(aBin) + BigInt(bBin);
    return sum.toString(2)
};

// 16,8,4,2,1
//  4,3,2,1,0
//  2,2,2,2,2


// 00000 = 0
// 11111 = 16+8+4+2+1 = 31

// let tmp = 15;
// console.log(tmp.toString(16)) // f 

// tmp = 15151515
// console.log(tmp.toString(16)) // e7319b

// tmp = 100
// console.log(tmp.toString(10)) // 100

// tmp = 4
// console.log(tmp.toString(2)) // "100"
// @lc code=end

