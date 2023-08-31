// https://leetcode.cn/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let len = s.length;
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < len; i++) {
        let char = s[i];
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(char);
                break;
            case ')':
            case ']':
            case '}':
                const top = stack.pop();
                if (top !== map[char]) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};

var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        switch (char) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case ')':
            case '}':
            case ']':
                const top = stack.pop();
                if (top !== char) {
                    return false;
                }
            default:
                break;
        }
    }
    return stack.length === 0;
}