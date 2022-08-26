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
 * @param {number} k
 * @return {number}
 * @runtime O(n)
 * @space O(n)
 */
 var kthSmallest = function(root, k) {
    
    let ascSortArr = inOrder(root);
    
    if(ascSortArr.length >= k) {
        return ascSortArr[k-1];
    }
    
    return null;
};

var inOrder = function(node){
    if(node === null) return [];
    return [...inOrder(node.left), node.val, ...inOrder(node.right)]
}