/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @runtime O(n)
 * @space O(1)
 */
 var middleNode = function(head) {
    
    if(head == null || head.next == null) return head;
    
    let fast = slow = head;
    while (fast && fast.next) {
        
        fast = fast.next.next;
        slow = slow.next;
        
    }
    return slow;
};

/**

[1,2,3,4,5]
[1,2,3,4,5,6]

**/
// @lc code=end

