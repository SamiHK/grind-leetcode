/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @runtime O(n)
 * @space O(1)
 */
 var lowestCommonAncestor = function(root, p, q) {
    if (root == null) { return null; }
    // Ancestor is Root
    // In BST no two nodes can have a common ancestor if root lies in between them else traverse root
    
    // if root is bigger than both left and right nodes, shift root to left side(smaller)
    if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
    // if root is lesser than both left and right nodes, shift root to right side(bigger)
    } else if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
    } else {
    // if p < root < q || p == root || q == root 
      return root;
    }
};
// @lc code=end

