/**
 * https://leetcode.cn/problems/daily-temperatures/
 * 单调栈记录之前访问过的元素，找右侧第一个比自己大的元素，需要单调递增的单调栈
 * 首先进入第一个元素
 * 比较栈顶元素和当前元素的大小：
 * 1. 如果当前元素小于等于栈顶元素，符合单调递增的条件，则直接入栈
 * 2. 如果当前元素大于栈顶元素，则说明栈顶元素找到了第一个比自己大的元素，要弹出栈顶元素，并且记录栈顶元素的结果为 当前元素索引减去栈顶元素索引，
 * 如果当前元素还是大于下一个栈顶元素，则继续重复上述过程，直至遇到比它小的元素或者为空
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const stack = [0];
    let result = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        let top = temperatures[stack[stack.length - 1]];
        const cur = temperatures[i];
        if (cur <= top) {
            stack.push(i);
        } else {
            while (cur > top && stack.length) {
                // 弹出栈顶元素，记录结果
                const topIndex = stack.pop();
                result[topIndex] = i - topIndex;
                top = temperatures[stack[stack.length - 1]]; 
            }
            stack.push(i);
        }
    }
    return result;
};