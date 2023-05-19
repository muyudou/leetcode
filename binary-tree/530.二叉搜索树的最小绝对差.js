/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let pre;
    let min = Number.MAX_VALUE;

    var inorder = root => {
        if (!root) {
            return
        }
        inorder(root.left);
        if (pre) {
            let diff = Math.abs(root.val - pre.val);
            if (pre && diff < min) {
                min = diff;
            }
        }
        pre = root;
        inorder(root.right);
    }
    inorder(root);
    return min;
};