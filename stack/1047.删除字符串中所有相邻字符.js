/**
 * 每次出栈一个元素，如果当前访问的元素和栈顶元素相等，说明需要出栈元素，无需进栈，如果不相等，则将之前出栈的元素放回去，且进栈元素
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const val = stack.pop();
        if (val && s[i] === val) {
            continue;
        }
        val && stack.push(val);
        stack.push(char);
    }
    return stack.join('');
};

var removeDuplicates = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const top = stack[stack.length - 1];
        const char = s[i];
        if (top === char) {
            stack.pop();
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};
