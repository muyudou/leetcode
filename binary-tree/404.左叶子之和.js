/**
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
