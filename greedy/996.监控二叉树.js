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
 * 0: 无覆盖 1: 有摄像头 2: 有覆盖
 * 1. 叶子节点返回有覆盖2，因为父节点要安装摄像头
 * 2. 如果左右2个子节点都有覆盖，则父节点为无覆盖为0
 * 3. 如果左孩子或者右孩子，有一个未覆盖，则父节点需要安装摄像头，返回1，result++
 * 4. 如果左孩子或者右孩子有一个有摄像头，则父节点有覆盖，返回2
 * 5. 最后根节点，如果返回了0，则需要添加一个摄像头，result++
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
        // 左右有覆盖，父节点为无覆盖
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