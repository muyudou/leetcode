var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return root;
    }
    if (root.val < p.val && root.val < q.val) {
        const right = lowestCommonAncestor(root.right, p, q);
        if (right) {
            return right;
        }
    }
    if (root.val > p.val && root.val > q.val) {
        const left = lowestCommonAncestor(root.left, p, q);
        if (left) {
            return left;
        }
    }
    return root;
}

var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return root;
    }
    if (root.val > p.val && root.val > q.val) {
        const left = lowestCommonAncestor(root.left, p, q);
        if (left) {
            return left;
        }
    }
    if (root.val < p.val && root.val < q.val) {
        const right = lowestCommonAncestor(root.right, p, q);
        if (right) {
            return right;
        }
    }
    return root;
}