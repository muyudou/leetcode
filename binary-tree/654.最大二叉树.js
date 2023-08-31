/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructMaximumBinaryTree = function(nums) {
    let maxIndex = 0;
    let max = 0;
    let len = nums.length;
    if (len === 0) {
        return null;
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    const root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, max));
    root.right = constructMaximumBinaryTree(nums.slice(max + 1, len));
    return root;
};

var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    let maxIndex = -1;
    let maxVal = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
            maxIndex = i;
        }
    }
    const root = new TreeNode(nums[maxIndex]);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    return root;
};
