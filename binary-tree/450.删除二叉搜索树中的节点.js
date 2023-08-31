/**
 * https://leetcode.cn/problems/delete-node-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return root;
    }
    if (root.val === key) {
        if (!root.left && !root.right) {
            return null;
        }
        if (root.left && !root.right) {
            return root.left;
        }
        if (!root.left && root.right) {
            return root.right;
        }
        let min = root.right;
        while (min && min.left) {
            min = min.left;
        }
        min.left = root.left;
        return root.right;

    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }
    return root;
};