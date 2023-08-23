/**
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const getDepth = (root, depth) => {
        if (!root) {
            return depth;
        }
        depth += 1;
        const leftDepth = getDepth(root.left, depth);
        const rightDepth = getDepth(root.right, depth);
        return Math.max(leftDepth, rightDepth);
    }
    return getDepth(root, 0);
};

var maxDepth = function(root) {
    const getDepth = (root) => {
        if (!root) {
            return 0;
        }
        const leftDepth = getDepth(root.left);
        const rightDepth = getDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }
    return getDepth(root);
};