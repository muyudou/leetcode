/**
 * https://leetcode.cn/problems/binary-tree-cameras/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
    let result = 0;
    // 0: 无覆盖 1: 有摄像头 2: 有覆盖
    var traverse = root => {
        // 叶子节点返回有覆盖
        if (!root) {
            return 2;
        }
        const left = traverse(root.left);
        const right = traverse(root.right);
        if (left === 2 && right === 2) {
            return 0;
        }
        // 如果左和右，有一个没覆盖，则+1
        if (left === 0 || right === 0) {
            result++;
            return 1;
        }
        // 如果左和右，有一个有摄像头
        if (left === 1 || right === 1) {
            return 2;
        }
        return -1;
    }
    if (traverse(root) === 0) {
        result++;
    }

    return result;
};