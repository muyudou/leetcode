/**
 * https://leetcode.cn/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
// 双指针法
var trap = function(height) {
    const len = height.length;
    const lMaxHeight = new Array(len).fill(0);
    lMaxHeight[0] = height[0];
    const rMaxHeight = new Array(len).fill(0);
    rMaxHeight[len - 1] = height[len - 1];

    // lMaxHeight[i] = max(height[i], lmaxHeight[i-1])
    for (let i = 1; i < len - 1; i++) {
        lMaxHeight[i] = Math.max(height[i], lMaxHeight[i-1]);
    }
    // rMaxHeight[i] = max(height[i], lmaxHeight[i+1])
    for (let i = len - 2; i > 0; i--) {
        rMaxHeight[i] = Math.max(height[i], rMaxHeight[i+1]);
    }

    let result = 0;
    for (let i = 1; i < len - 1; i++) {
        const h = Math.min(lMaxHeight[i], rMaxHeight[i]) - height[i];
        if (h > 0) {
            result += h;
        }
    }
    return result;
};

// 单调栈法
var trap = function(height) {
    const len = height.length;
    const stack = [0];
    let result = 0;
    for (let i = 1; i < len; i++) {
        const val = height[i];
        while (stack.length && height[stack[stack.length-1]] < val) {
            let top = stack[stack.length-1];
            const right = val;
            stack.pop();
            if (stack.length) {
                const mid = height[top];
                // left是当前栈顶元素
                top = stack[stack.length - 1];
                const left = height[top];
                const h = Math.min(left, right) - mid;
                const w = i - top - 1;
                result += h * w;
            }
        }
        stack.push(i);
    }
    return result;
}