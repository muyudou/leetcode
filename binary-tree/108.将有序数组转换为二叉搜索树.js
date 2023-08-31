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
var sortedArrayToBST = function(nums) {
    const traversal = (nums, start, end) => {
        if (start >= end) {
            return null;
        }
        let mid = start + parseInt((end - start) / 2, 10);
        const root = new TreeNode(nums[mid]);
        root.left = traversal(nums, start, mid);
        root.right = traversal(nums, mid + 1, end);
        return root;
    }
    return traversal(nums, 0, nums.length);
};

var sortedArrayToBST = function(nums) {
    const len = nums.length;
    if (len < 1) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    const rootIndex = parseInt(len / 2, 10);
    const root = new TreeNode(nums[rootIndex]);
    root.left = sortedArrayToBST(nums.slice(0, rootIndex));
    root.right = sortedArrayToBST(nums.slice(rootIndex + 1));
    return root;
};