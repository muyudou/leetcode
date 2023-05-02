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