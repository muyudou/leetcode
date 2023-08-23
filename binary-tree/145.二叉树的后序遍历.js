/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    const traversal = root => {
        if (!root) {
            return;
        }
        traversal(root.left);
        traversal(root.right);
        result.push(root.val);
    };
    traversal(root);
    return result;
};

// 迭代法
var postorderTraversal = function(root) {
    const result = [];
    if (!root) {
        return result;
    }
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val);
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return result;
}

/**
 * 迭代法：
 *  如果节点不为空，则将节点入栈，直到节点为空
 *     如果有左子树，遍历左子树，如果有右子树，遍历右子树
 *     如果是叶子节点，则出栈，加入结果集
 *  节点为空说明到叶子节点了，出栈一个元素
 *     如果当前节点是前一个节点的左孩子，则遍历当前节点的右孩子
 *     否则，则到了将栈顶元素出栈的时机，置为null是出栈
 * 
 * @param {*} root 
 */
var postorderTraversal = function(root) {
    const stack = [];
    const result = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            if (node.left) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        node = stack.pop();
        result.push(node.val);
        // 如果是左孩子，则遍历到右孩子
        if (stack.length && node === stack[stack.length - 1].left) {
            node = stack[stack.length - 1].right;
        } else {
            node = null;
        }
    }
    return result;
}

var postorderTraversal = function(root) {
    const result = [];
    if (!root) {
        return [];
    }
    const stack = [];
    while(stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return result.reverse();
}