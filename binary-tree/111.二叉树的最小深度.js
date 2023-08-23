/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
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
var minDepth = function(root) {
    const getDepth = root => {
        if (!root) {
            return 0;
        }
        let leftDepth = getDepth(root.left);
        let rightDepth = getDepth(root.right);
        if (root.left && root.right) {
            return 1 + Math.min(leftDepth, rightDepth);
        } else if (root.left) {
            return 1 + leftDepth;
        } else {
            return 1 + rightDepth;
        }
    }
    return getDepth(root);
};

var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let depth = 0;
    const queue = [root];
    while (queue.length) {
        const size = queue.length;
        depth++;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) {
                return depth;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return depth;
}
