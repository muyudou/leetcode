/**
 * https://leetcode.cn/problems/validate-binary-search-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let pre;
    const inorder = (root) => {
        if (!root) {
            return true;
        }
        const leftValid = inorder(root.left);
        if (!leftValid) {
            return false;
        }
        if (pre && root.val <= pre.val) {
            return false;
        }
        pre = root;
        const rightValid = inorder(root.right);
        return rightValid;
    }
    return inorder(root);
};