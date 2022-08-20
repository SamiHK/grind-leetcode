/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
* @param {string} s
* @return {number}
* @runtime O(n)
* @space O(1)
*/
var myAtoi = function(s) {
   
   let [X, Y] = [Math.pow(-2,31), Math.pow(2, 31) - 1];
   let nums = {"1": 1,"2": 2,"3": 3,"4": 4,"5": 5,"6": 6,"7": 7,"8": 8,"9": 9,"0": 0}
   
   s = s.split("");
   let sign = "+";
   let numStr = "";
   
   // step # 1: Find WhiteSpaces
   let i = 0;
   for(; i < s.length; i++){
       if(s[i] === " "){}
       else {break}
   }
   
   // step # 2: Find Sign
   for(; i < s.length; i++){
       if(s[i] === "+" || s[i] === "-")
       {
           sign = s[i];
           if(s[i+1] && (s[i+1] === "+" || s[i+1] === "-")) return 0;
       }
       else {break}
   }
   
   // step # 3: Find Digits
   for(; i < s.length; i++){
       if(s[i] in nums){numStr = numStr.concat(s[i])}
       else {break}
   }
   
   // step # 4: Parse into Integer
   let number = parseInt(numStr);
   // step # 5: Apply sign
   if(sign === "-") number = number * (-1);
   
   // step # 6: check if number is in range
   if(number < X) return X;
   if(number > Y) return Y;
   
   return isNaN(number) ? 0 : number;
};
// @lc code=end

/**
 * 
TEST CASES; 

"+-12"
"words and 987"
"42"
"4193 with words"
"   -3231 sami 121"
" sami "
" -2147483648 +-2147483648"
 */

