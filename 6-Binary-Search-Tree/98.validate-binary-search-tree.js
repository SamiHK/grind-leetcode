/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @runtime O(n)
 * @space O(1)
 */
 var isValidBST = function(root) {
    
    const ascSortArr = inOrder(root);
    
    for(let i = 0; i < ascSortArr.length; i++) {
        if(ascSortArr[i] >= ascSortArr[i+1]) return false;
    }
    
    return true;
};


var inOrder = (node) => {
    if(node === null) return [];
    return [...inOrder(node.left), node.val, ...inOrder(node.right)]
}

// IN-ORDER Traverse gives sorted array for BST
// PRE-ORDER Traverse gives Max-Heap if there are no empty leaves
// POST-ORDER Traverse gives Min-Heap if there are no empty leaves
// @lc code=end

