/**
 * https://leetcode.cn/problems/sum-of-left-leaves/description/
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const getSum = (root, isLeft) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right && isLeft) {
            sum += root.val;
        }
        if (root.left) {
            getSum(root.left, true);
        }
        if (root.right) {
            getSum(root.right, false);
        }
    }
    getSum(root, false)
    return sum;
};

var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const traversal = (root, pre) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right && root === pre.left) {
            sum += root.val;
        }
        traversal(root.left, root);
        traversal(root.right, root);
    };
    traversal(root, root);
    return sum;
}