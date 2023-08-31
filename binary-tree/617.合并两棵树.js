/**
 * https://leetcode.cn/problems/merge-two-binary-trees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};

var mergeTrees = function(root1, root2) {
    const merge = (root1, root2, root1Pre, isLeft) => {
        if (root1 && root2) {
            root1.val = root1.val + root2.val;
            merge(root1.left, root2.left, root1, true);
            merge(root1.right, root2.right, root1, false);
        } else if (!root1 && root2) {
            if (root1Pre) {
                isLeft ? root1Pre.left = root2 : root1Pre.right = root2;
            } else {
                return root2;
            }
        }
        return root1;
    };
    root1 = merge(root1, root2, null);
    return root1;
};

var mergeTrees = function(root1, root2) {
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
}