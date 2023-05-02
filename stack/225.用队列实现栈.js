// https://leetcode.cn/problems/implement-stack-using-queues/
var MyStack = function() {
    this.queue = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let len = this.queue.length;
    while (--len > 0) {
        const top = this.queue.shift();
        this.queue.push(top);
    }
    const top = this.queue.shift();
    return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const top = this.queue.pop();
    this.queue.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */