/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 * T: O(n)
 * S: 0(1)
 */
 var evalRPN = function(tokens) {
  
    const stack = [];
    const opMap = {'+':'+','-':'-','*':'*','/':'/'};
    
  // If the token is an operator, the operands will be
  // the last two items on the stack.
  // Evaluate the expression then add the value back on to the stack,
  // as it will be the operand for the next expression.
  // Otherwise, its an operand (digit). Cast to number and add to stack.
    tokens.forEach(( token ) => {
        if (token in opMap) {
            
          const [y, x] = [stack.pop(), stack.pop()];
            
          stack.push(evaluate(x, y, token));
            
        } else {
          stack.push(+token);  // Number(token)
        }
    });
    return stack.pop();
};


const evaluate = ( x, y, op ) => {
  switch ( op ) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    case '/': return x / y | 0;  // Math.trunc()
  }
};
// @lc code=end

