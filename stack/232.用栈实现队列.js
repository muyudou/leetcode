// https://leetcode.cn/problems/implement-queue-using-stacks/

var MyQueue = function() {
    this.inStack = new Array();
    this.outStack = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let inStack = this.inStack;
    let outStack = this.outStack;
    if (outStack.length) {
        const top = outStack.pop();
        return top;
    }
    while (inStack.length > 1) {
        const top = inStack.pop();
        outStack.push(top)
    }
    const top = inStack.pop();
    return top;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const top = this.pop();
    this.outStack.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.inStack.length && !this.outStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.outStack.length) {
        while(this.inStack.length) {
            const val = this.inStack.pop();
            this.outStack.push(val);
        }
    }
    if (!this.outStack.length) {
        return;
    }
    const val = this.outStack.pop();
    return val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const val = this.pop();
    this.outStack.push(val);
    return val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.inStack.length && !this.outStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */