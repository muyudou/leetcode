/**
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */

// 双指针
var largestRectangleArea = function(heights) {
    const len = heights.length;
    const minLeftArr = new Array(len);
    const minRightArr = new Array(len);

    // 找左边比当前元素小的第一个元素
    minLeftArr[0] = -1;
    for (let i = 1; i < len; i++) {
        let j = i - 1;
        while(j >= 0 && heights[j] >= heights[i]) {
            j = minLeftArr[j];
        }
        minLeftArr[i] = j;
    }
    // 找右边比当前元素小的第一个元素
    minRightArr[len-1] = len;
    for (let i = len - 2; i >= 0; i--) {
        let j = i + 1;
        while(j < len && heights[j] >= heights[i]) {
            j = minRightArr[j];
        }
        minRightArr[i] = j;
    }
    let result = 0;
    for (let i = 0; i < len; i++) {
        const sum = heights[i] * (minRightArr[i] - minLeftArr[i] - 1);
        result = Math.max(sum, result);
    }
    return result;
};

// 单调栈方式
var largestRectangleArea = function(heights) {
    heights = [0, ...heights, 0];
    const len = heights.length;
    const stack = [];
    stack.push(0);

    let result = 0;
    for (let i = 1; i < len; i++) {
        const val = heights[i];
        let topIndex = stack[stack.length - 1];
        let top = heights[topIndex];
        if (val >= top) {
            stack.push(i);
        } else {
            while (stack.length && val < heights[topIndex]) {
                const midIndex = stack.pop();
                if (stack.length) {
                    const left = stack[stack.length - 1];
                    const right = i;
                    const w = right - left - 1;
                    const h = heights[midIndex];
                    result = Math.max(result, w * h);
                    topIndex = left;
                }
            }
            stack.push(i);
        }
    }
    return result;
}