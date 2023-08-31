/**
 * https://leetcode.cn/problems/find-bottom-left-tree-value/
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
var findBottomLeftValue = function(root) {
    let maxDepth = 0;
    let node = root;
    var find = (root, depth) => {
        if (!root) {
            return 0;
        }
        if (depth > maxDepth) {
            maxDepth = depth;
            node = root;
        }
        if (root.left) {
            find(root.left, depth + 1);
        }
        if (root.right) {
            find(root.right, depth + 1);
        }
    }
    find(root, 0);
    return node.val;
};

var findBottomLeftValue = function(root) {
    let maxDepth = -Infinity;
    let leftValue;
    const traversal = (root, depth) => {
        if (!root) {
            return depth;
        }
        if (depth > maxDepth) {
            leftValue = root.val;
            maxDepth = depth;
        }
        traversal(root.left, depth + 1);
        traversal(root.right, depth + 1);
    };
    traversal(root, 0);
    return leftValue;
};