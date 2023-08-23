/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var getHeight = function(root) {
    if (!root) {
        return 0;
    }
    const leftHeight = getHeight(root.left);
    if (leftHeight === -1) {
        return -1;
    }
    const rightHeight = getHeight(root.right);
    if (rightHeight === -1) {
        return -1;
    }
    return Math.abs(leftHeight - rightHeight) > 1 ? -1 : Math.max(leftHeight, rightHeight) + 1;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    const height = getHeight(root);
    return height === -1 ? false : true;
};

var isBalanced = function(root) {
    const getHeight = root => {
        if (!root) {
            return 0;
        }
        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);
        if (leftHeight === -1 || rightHeight === -1
            || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return getHeight(root) !== -1
};