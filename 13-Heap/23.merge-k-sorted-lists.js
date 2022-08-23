/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 * @runtime O(n * m)
 * @space O(m)
 */
 var mergeKLists = function(lists) {
    
    if(lists === null || lists.length === 0) return null;
        
    for(let i = 0; i < (lists.length -1); i++){ // if there are three elements, then run from 0 to 1 only
        
        // recursive merge
        lists[i+1] = mergeLists(lists[i], lists[i+1]);
        
    }
    
    return lists[lists.length-1];
};



const mergeLists = (left, right) => {
    
    let result = new ListNode();
    let tail = result;
    
    
    while(left !== null && right !== null) {
        if(left.val < right.val){
            tail.next =left;
            left = left.next; // move left ahead
        } else {
            tail.next = right;
            right = right.next; // move right ahead
        }
        
        tail = tail.next //move tail ahead
    }
    
    // if left have some nodes remaining
    if(left){
        tail.next = left;
    }
    
    // if right have some nodes remaining
    if(right){
        tail.next = right;
    }
    
    
    // return the frst actual node attached to result.
    return result.next;
    
};
// @lc code=end

