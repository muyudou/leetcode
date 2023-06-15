/**
 * https://leetcode.cn/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const len1 = nums1.length;
    const result = new Array(len1).fill(-1);
    let map = {};
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = i;
    }
    let stack = [nums2[0]];
    for (let i = 1; i < nums2.length; i++) {
        const cur = nums2[i];
        let top = stack[stack.length - 1];
        while (cur > top && stack.length) {
            top = stack.pop();
            // 不在nums1中时，只需要弹出
            if (!top in map) {
                break;
            } else {
                result[map[top]] = cur;
            }
            top = stack[stack.length - 1];
        }
        stack.push(cur);
    }
    return result;
};