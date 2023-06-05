/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归超时
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return root.val;
    }
    // 选根节点
    let val1 = root.val;
    if (root.left) {
        val1 += rob(root.left.left) + rob(root.left.right);
    }
    if (root.right) {
        val1 += rob(root.right.left) + rob(root.right.right);
    }

    // 不选根节点
    const val2 = rob(root.left) + rob(root.right);
    return Math.max(val1, val2);
};

// 递归 + 缓存
let memery = {};
var rob = function(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return root.val;
    }
    if (memery[root]) {
        return memery[root];
    }
    // 选根节点
    let val1 = root.val;
    if (root.left) {
        val1 += rob(root.left.left) + rob(root.left.right);
    }
    if (root.right) {
        val1 += rob(root.right.left) + rob(root.right.right);
    }

    // 不选根节点
    const val2 = rob(root.left) + rob(root.right);
    memery[root] = Math.max(val1, val2);
    return memery[root];
};

/**
 * dp: 维护两个值，偷当前节点的最大值和不偷当前节点的最大值, dp[0] 不偷，dp[1] 偷
 * 遍历顺序：左右根，求出左右子树的dp数组
 * 递推公式: dp[0] = max(left[0], left[1]) + max(right[0], right[1])
 * dp[1] = root.val + left[0] + right[0]
 * 初始化: 非空返回0，一个节点，返回当前值。
 */
var rob = function (root) {
    if (!root) {
        return 0;
    }
    var robInner = root => {
        if (!root) {
            return [0, 0];
        }
        if (!root.left && !root.right) {
            return [0, root.val];
        }
        const left = robInner(root.left);
        const right = robInner(root.right);
        // 偷当前节点
        const val1 = root.val + left[0] + right[0];
        // 不偷当前节点
        const val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return [val2, val1];
    }
    const result = robInner(root);
    return Math.max(result[0], result[1])
}
