/**
 * https://leetcode.cn/problems/find-mode-in-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let result = [];
    let maxCount = 0;
    let count = 0;
    let pre;
    if (!root.left && !root.right) {
        return [root.val];
    }
    var inorder = root => {
        if (!root) {
            return;
        }
        inorder(root.left);
        if (!pre) {
            count = 1;
        } else if (root.val === pre.val) {
            count++;
        } else {
            count = 1;
        }
        pre = root;
        if (count > maxCount) {
            maxCount = count;
            result = [root.val]
        } else if (count === maxCount) {
            result.push(root.val);
        }
        inorder(root.right);
    }
    inorder(root);
    return result;
};