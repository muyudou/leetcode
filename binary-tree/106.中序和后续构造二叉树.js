/**
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let len = postorder.length;
    if (len === 0) {
        return null;
    }
    let rootVal = postorder[len - 1];
    let root = new TreeNode(rootVal);
    if (len === 1) {
        return root;
    }
    let mid = 0;
    for (let i = 0; i < len; i++) {
        if (inorder[i] === rootVal) {
            mid = i;
            break;
        }
    }
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
    root.right = buildTree(inorder.slice(mid+1, len), postorder.slice(mid, len - 1));
    return root;
};