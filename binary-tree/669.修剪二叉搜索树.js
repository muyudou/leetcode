var trimBST = function (root, low, high) {
    if (!root) {
        return null;
    }
    if (root.val < low) {
        const right = trimBST(root.right, low, high);
        if (right) {
            return right;
        }
    }
    if (root.val > high) {
        const left = trimBST(root.left, low, high);
        if (left) {
            return left;
        }
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};
