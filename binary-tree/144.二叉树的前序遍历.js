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
var preorderTraversal = function(root) {
    let result = [];
    const traversal = root => {
        if (!root) {
            return;
        }
        result.push(root.val);
        traversal(root.left);
        traversal(root.right);
    };
    traversal(root);
    return result;
};

// 迭代法
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return result;
}