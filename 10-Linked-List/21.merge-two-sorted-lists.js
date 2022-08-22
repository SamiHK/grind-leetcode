/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * @runtime O(n)
 * @space O(1)
 */
 var mergeTwoLists = function(list1, list2) {
    
    if(list1 == null && list2 == null) return null;
    if(list1 == null) return list2;
    if(list2 == null) return list1;
    
    let head = new ListNode(); // since head and tail are same
    let tail = head; // shallow copy
    
    while(list1 !== null && list2 !== null){
        
        if(list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        // move tail to next node after adding a node.
        tail =  tail.next;    
    }
    
    //if any of list1 or list2 are non-empty then connect tail with the respective head of list.
    if(list1) {
        tail.next = list1;
    }
    
    if(list2){
        tail.next = list2;
    }
    
    
    return head.next;
};
// @lc code=end

