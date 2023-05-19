/**
 * https://leetcode.cn/problems/search-in-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) {
        return null;
    }
    if (root.val === val) {
        return root;
    } else if (root.val < val) {
        return searchBST(root.right, val);
    } else {
        return searchBST(root.left, val);
    }
};


var searchBST = function(root, val) {
    while (root) {
        if (root.val === val) {
            return root;
        } else if (root.val < val) {
            root = root.right;
        } else {
            root = root.left;
        }
    }
    return null
}