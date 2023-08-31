/**
 * https://leetcode.cn/problems/trim-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    if (!root) {
        return null;
    }
    if (root.val < low) {
        const right = trimBST(root.right, low, high);
        if (right) {
            return right;
        }
    }
    if (root.val > high) {
        const left = trimBST(root.left, low, high);
        if (left) {
            return left;
        }
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};

var trimBST = function(root, low, high) {
    if (!root) {
        return root;
    }
    if (root.val < low) {
        return trimBST(root.right, low, high);
    } else if (root.val > high) {
        return trimBST(root.left, low, high);
    } else {
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
    }
};