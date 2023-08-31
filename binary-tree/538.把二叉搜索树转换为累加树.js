/**
 * https://leetcode.cn/problems/convert-bst-to-greater-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let pre = 0;
    const traversal = root => {
        if (!root) {
            return root;
        }
        traversal(root.right);
        root.val += pre;
        pre = root.val;
        traversal(root.left);
        return root;
    };
    return traversal(root);
};

var convertBST = function(root) {
    
}