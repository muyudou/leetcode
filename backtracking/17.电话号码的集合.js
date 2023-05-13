/**
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitMap = {
       2: 'abc',
       3: 'def',
       4: 'ghi',
       5: 'jkl',
       6: 'mno',
       7: 'pqrs',
       8: 'tuv',
       9: 'wxyz' 
    }
    const result = [];
    const path = [];
    const letterCombine = (digits, index) => {
        if (path.length === digits.length) {
            if (path.length) {
                result.push(path.join(''))
            }
            return;
        }
        const digit = digits[index];
        const letters = digitMap[digit];
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i]);
            letterCombine(digits, index + 1);
            path.pop();
        }
    }
    letterCombine(digits, 0);
    return result;
};