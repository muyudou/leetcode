/**
 * https://leetcode.cn/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const len = nums.length;
    const result = new Array(len).fill(-1);
    const stack = [0];
    for (let i = 1; i < 2 * len; i++) {
        const val = nums[i % len];
        while (stack.length && nums[stack[stack.length - 1]] < val) {
            const top = stack.pop();
            result[top % len] = val;
        }
        stack.push(i % len);
    }
    return result;
};