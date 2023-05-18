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
 * @return {number}
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) {
       return 0;
   }
   const leftCount = countNodes(root.left);
   const rightCount = countNodes(root.right);
   return leftCount + rightCount + 1;
};

var countNodes = function(root) {
   if (!root) {
       return 0;
   }
   let leftDepth = 0;
   let rightDepth = 0;
   let node = root.left;
   while (node) {
       leftDepth++;
       node = node.left;
   }
   node = root.right;
   while (node) {
       rightDepth++;
       node = node.right;
   }
   if (leftDepth === rightDepth) {
       return Math.pow(2, leftDepth + 1) - 1;
   }
   const leftCount = countNodes(root.left);
   const rightCount = countNodes(root.right);
   return leftCount + rightCount + 1;
};