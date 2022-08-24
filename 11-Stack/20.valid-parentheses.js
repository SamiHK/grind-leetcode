/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let closeToOpen = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    
    if( s == null || s == [] || (s.length ==0 && s[0] in closeToOpen)) return false;
     
    let stack = [];
    for(let i = 0; i < s.length; i++){
        
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        } else{
            if(stack == []) false;
            if(s[i] in closeToOpen && stack[stack.length-1] == closeToOpen[s[i]]){
                stack.pop();
            } else {
                return false
            }
        }
    }
    
    return stack.length === 0 ? true: false;
};
// @lc code=end

