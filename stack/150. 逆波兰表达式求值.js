/**
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const char = tokens[i];
        if (/\d/.test(char)) {
            stack.push(char);
        } else {
            const right = Number(stack.pop());
            const left = Number(stack.pop());
            let result = 0;
            switch (char) {
                case '+':
                    result = left + right
                    break;
                case '-':
                    result = left - right
                    break;
                case '*':
                    result = left * right
                    break;
                case '/':
                    result = left / right > 0 ? Math.floor(left / right) : Math.ceil(left / right)
                    break;
                default:
                    break;
            }
            stack.push(result);   
        }
    }
    return stack[0];
};

var evalRPN = function(tokens) {
    const stack = [];
    let result = 0;
    for (let i = 0; i < tokens.length; i++) {
        const char = tokens[i];
        if (/\d/.test(char)) {
            stack.push(parseInt(char, 10));
            continue;
        }
        // 非数字，出栈两个元素进行计算
        const val1 = +stack.pop();
        const val2 = +stack.pop();
        switch (char) {
            case '+':
                result = val1 + val2;
                break;
            case '-':
                result = val2 - val1;
                break;
            case '*':
                result = val2 * val1;
                break;
            case '/':
                // 注意负数相除
                result = parseInt(val2 / val1, 10);
                break;
            default:
                break;
        }
        stack.push(result);
    }
    return stack.pop();
};