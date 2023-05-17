// https://leetcode.cn/problems/restore-ip-addresses/

function isValid(s, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return false;
    }
    if (endIndex - startIndex > 3) {
        return false;
    }
    if (s[startIndex] === '0' && startIndex != endIndex) {
        return false;
    }
    let num = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        num = num * 10 + Number(s[i]);
    }
    return num <= 255;
}
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];
    let path = [];
    let len = s.length;
    let count = 0;
    const backTracking = (startIndex) => {
        if (count === 3) {
            if (isValid(s, startIndex, len - 1)) {
                path.push(s.slice(startIndex, len))
                result.push(path.join('.'));
                path.pop();
            }
            return;
        }
        for (let i = startIndex; i < len; i++) {
            if (isValid(s, startIndex, i)) {
                path.push(s.slice(startIndex, i + 1))
                count++;
                backTracking(i + 1);
                path.pop();
                count--;
            }
        }
    }
    backTracking(0);
    return result;
};