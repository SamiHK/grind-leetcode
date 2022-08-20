/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    
    // edge cases
    if (s.length === 1) return s;
    if (s.length === 2) {
        if (s[0] === s[1]) return s;
        else return s[0];
    }

    let longestPal = '';

    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        let j = i + 1;
        //abccaaccba
        // check single character palindrome start
        const curr1 = findLongestPalindrome(s, i, i);
        // check same consecutive characters palindrome start
        const curr2 = findLongestPalindrome(s, i, j);

        const longPal = curr1.length > curr2.length ? curr1 : curr2;

        if (longPal.length > longestPal.length) {
            longestPal = longPal;
        } 
    }

    return longestPal;
};

const findLongestPalindrome = (str, i, j) => {
    // abccaaccba (i=4, j=5) this will catch all(aa, caac, ccaacc, bccaaccb, abccaaccba)
    // abcba (i=2, j=2) this will catch all(c,bcb, abcba)
    while(i >= 0 && j < str.length && str[i] === str[j]) {
        i -= 1;
        j += 1;
    }
    // slice the qualified substring from the second last iteration
    // if match found i+1 gives the correct substring, else we return nothing by i+1,j slicing
    return str.slice(i + 1, j);
}
// @lc code=end

// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("aa"));
// console.log(longestPalindrome("ab"));

// console.log("Results: ", longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("abcba"));
// console.log(longestPalindrome("abccaaccba"));