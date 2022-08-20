/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @runtime O(n)
 * @space O(1)
 */
 var majorityElement = function(nums) {
    // https://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html
    /**
    
        A Linear Time Majority Vote Algorithm This algorithm, which Bob Boyer and I invented in 1980 decides which element of a sequence 
        is in the majority, provided there is such an element. How would you determine the majority element of:
        sequence:  A A A C C B B C C C B C C

     A A A C C B B C C C B C C
    ^
    ?:0
    
      A A A C C B B C C C B C C
          ^
         A:2
    
      A A A C C B B C C C B C C
              ^
             A:1
    
      A A A C C B B C C C B C C
                ^
               ?:0
    
       A A A C C B B C C C B C C
                   ^
                  B:1
    
        A A A C C B B C C C B C C
                          ^
                         C:2
   
      A A A C C B B C C C B C C
                            ^
                           C:2
    
    
      A A A C C B B C C C B C C 
                           ^
                          C:3
                          
    The majority element is C (if any element has a majority).
    Note that if you replaced the first C with an A, above, the algorithm would still end with C being chosen, but in fact C would not 
    be the majority element: there is no majority in the modified list.

    In some situations you know, or assume, there is a majority element.

    But if you must confirm that the chosen element is indeed the majority element, you must take one more linear pass through the data 
    to do it. 
    **/
    
    if(nums.length === 0) return -1;
    
    let counter = 1;
    let majority = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        
        // increase and decrease in majority
        if(nums[i] === majority) {
            counter++;
        } else if(nums[i] !== majority) {
            counter--;
        }
        
        // if counter become zero
        if(counter === 0){
            counter++;
            // new majority vote is selected
            majority = nums[i];
        }
    }
    
    return majority;
};
// @lc code=end

