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