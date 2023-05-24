/**
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
var postorderTraversal = function(root) {
    const result = [];
    const traversal = root => {
        if (!root) {
            return;
        }
        traversal(root.left);
        traversal(root.right);
        result.push(root.val);
    };
    traversal(root);
    return result;
};

// 迭代法
var postorderTraversal = function(root) {
    const result = [];
    if (!root) {
        return result;
    }
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val);
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return result;
}