/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start



/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

 class MyQueue{
    constructor(){
        this.stack1 = [];
    }
    
    push(x){
        //stack1 is used for pushing elements and as serving queue
        this.stack1.push(x);
    }
    
    pop(){
        return this.stack1.shift();
    }
    
    peek(){
        return (this.stack1.length!==0) ? this.stack1[0] : null;
    }
    
    empty(){
        //stack1 is used for pushing elements and as serving queue
        return this.stack1.length === 0 ? true: false;
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

