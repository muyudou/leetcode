/**
 * https://leetcode.cn/problems/binary-tree-paths/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    let path = [];
    if (!root) {
        return [];
    }
    const backtracking = root => {
        path.push(root.val);
        if (!root.left && !root.right) {
            result.push(path.join('->'));
            return;
        }
        if (root.left) {
            backtracking(root.left);
            path.pop();
        }
        if (root.right) {
            backtracking(root.right);
            path.pop();
        }
    }
    backtracking(root);
    return result;
};