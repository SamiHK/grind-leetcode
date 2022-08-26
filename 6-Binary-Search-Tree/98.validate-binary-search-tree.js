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
    return findValidBST(root, -Infinity, Infinity)    
};

var findValidBST = function(root, minVal, maxVal) {
    
    if(root === null) return true;
    if (root.val >= maxVal || root.val <= minVal) return false;
    
    // if goes left, root becomes right
    let isLeftValid = findValidBST(root.left, minVal, root.value)
    
    // if goes right, root becomes left
    let isRightValid = findValidBST(root.right, root.val, maxVal)
    
    return isLeftValid && isRightValid;
}
// @lc code=end

