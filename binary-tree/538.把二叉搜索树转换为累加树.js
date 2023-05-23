var convertBST = function(root) {
    let pre = 0;
    const traversal = root => {
        if (!root) {
            return root;
        }
        traversal(root.right);
        root.val += pre;
        pre = root.val;
        traversal(root.left);
        return root;
    };
    return traversal(root);
};