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
