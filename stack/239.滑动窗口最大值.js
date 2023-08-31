/**
 * https://leetcode.cn/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MyQueue {
    queue = [];
    // 出栈：只有元素等于最左边的元素才出栈，否则不需要操作
    pop(value) {
        const queue = this.queue;
        const top = this.front();
        if (queue.length && value === top) {
            queue.shift();
        }
    }
    // 入队：如果当前元素大于队列中的元素，则将队列中元素出队，直到队列变为单调递减
    push(value) {
        const queue = this.queue;
        while (queue.length && value > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(value);
    }
    // 取第一个元素
    front() {
        const top = this.queue[0];
        return top;
    }
}

var maxSlidingWindow = function(nums, k) {
    const queue = new MyQueue();
    const result = [];
    // 先构造k个大小的队列
    for (let i = 0; i < k; i++) {
        queue.push(nums[i]);
    }
    // 把第一个放进去
    result.push(queue.front())
    // 遍历后面的元素，不断的出对左边的元素，入队当前元素，模拟滑动窗口
    for (let i = k; i < nums.length; i++) {
        queue.pop(nums[i-k]);
        queue.push(nums[i]);
        result.push(queue.front());
    }
    return result;
};


class Queue2 {
    constructor() {
        this.queue = [];
    }
    pop(val) {
        if (!this.queue.length) {
            return;
        }
        const top = this.queue[0];
        if (top === val) {
            this.queue.shift();
        }
    }
    push(val) {
        while(this.queue[this.queue.length - 1] < val) {
            this.queue.pop();
        }
        this.queue.push(val);
    }
    front() {
        return this.queue && this.queue[0];
    }
}
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const q = new Queue2();
    for (let i = 0; i < k; i++) {
        q.push(nums[i]);
    }
    result.push(q.front());
    for (let i = k; i < nums.length; i++) {
        q.pop(nums[i - k]);
        q.push(nums[i]);
        result.push(q.front());
    }
    return result;
};