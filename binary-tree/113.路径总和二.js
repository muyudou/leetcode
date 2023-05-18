/**
 * https://leetcode.cn/problems/path-sum-ii/
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    let path = [];
    var getPath = (root, targetSum) => {
        if (!root) {
            return;
        }
        path.push(root.val);
        if (!root.left && !root.right && targetSum - root.val === 0) {
            result.push(path.slice());
            return;
        }
        if (root.left) {
            getPath(root.left, targetSum - root.val);
            path.pop();
        }
        if (root.right) {
            getPath(root.right, targetSum - root.val);
            path.pop();
        }
    }
    getPath(root, targetSum);
    return result;
};