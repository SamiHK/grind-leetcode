/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * @runtime O(n)
 * @space O(1)
 */
 var hasCycle = function(head) {
    
    if(head == null || head.next == null) return false;
    
    let slow = head;
    let fast = head.next;
    
    while(fast && fast.next){
        // fast moves by two
        fast = fast.next.next
        // slow moves by one
        slow = slow.next
        // two pointers meet, cycle
        if(fast === slow){
            return true
        }
    }
    
    return false;  
};

/**

[]
-1
[1,1,1,1]
-1
[1,2]
-1
[3,2,0,-4]
1
[1,2]
0
[1]
-1

**/
// @lc code=end

