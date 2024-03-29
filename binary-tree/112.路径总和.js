/**
 * https://leetcode.cn/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right && targetSum - root.val === 0) {
        return true;
    }
    if (root.left) {
        const leftResult = hasPathSum(root.left, targetSum - root.val);
        if (leftResult) {
            return true;
        }
    }
    if (root.right) {
        const rightResult = hasPathSum(root.right, targetSum - root.val);
        if (rightResult) {
            return true;
        }
    }
    return false;
};

var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right && targetSum === root.val) {
        return true;
    }
    if (traversal(root.left, targetSum - root.val)) {
        return true;
    }
    if (traversal(root.right, targetSum - root.val)) {
        return true;
    }
    return false;
};