/**
 * https://leetcode.cn/problems/symmetric-tree/
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
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const compare = (left, right) => {
        if (!left && right) {
            return false;
        } else if (left && !right) {
            return false;
        } else if (!left && !right) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }
        const inside = compare(left.right, right.left);
        const outside = compare(left.left, right.right);
        return inside && outside;
    }
    return compare(root.left, root.right);
};