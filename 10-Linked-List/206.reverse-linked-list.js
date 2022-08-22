/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @return O(n)
 * @space O(1)
 */
 var reverseList = function(head) {
    
    if(head === null || head.next == null) return head;
    
    let prev = null;
    let curr = head;
    while(curr !== null){
        
        let next = curr.next;
        
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// const reverseList = (head, prev = null) => {
    
//     if(head === null) return prev;
    
//     let next = head.next;
//     head.next = prev

//     return reverseList(next, head);
// };


/**
       null -> 1 -> 2 -> 3 -> 4 -> 5 -> null
       prev  curr  next
       --------------------------------------
       null -> 1 -> 2 -> 3 -> 4 -> 5 -> null
       prev = null, curr = 1, next = 2
       --------------------------------------
       --------------------------------------
       1->null  ->            2 -> 3 -> 4 -> 5 -> null
       prev = 1->null, curr = 2, next = 3
       --------------------------------------
       --------------------------------------
       2->1->null            -> 3 -> 4 -> 5 -> null
       prev  2->1->null, curr = 3, next = 4
       --------------------------------------
       --------------------------------------
       3->2->1->null            -> 4 -> 5 -> null
       prev  3->2->1->null, curr = 4, next = 5
       --------------------------------------
       --------------------------------------
       4->3->2->1->null             -> 5 -> null
       prev  4->3->2->1->null, curr = 5, next = null
       --------------------------------------
       --------------------------------------
       5->4->3->2->1->null          
       prev  5->4->3->2->1->null[answer], curr = null [Reversed]
       --------------------------------------
       
       
        [1,2,3,4,5]
        [1,2]
        []
**/

// @lc code=end

