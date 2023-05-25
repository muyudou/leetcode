/**
 * https://leetcode.cn/problems/monotone-increasing-digits/
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    const arr = ('' + n).split('').map(item => +item);
    const len = arr.length;
    let flag = len;
    for (let i = len - 1; i > 0; i--) {
        if (arr[i - 1] > arr[i]) {
            arr[i - 1] = arr[i-1] - 1;
            flag = i;
        }
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i >= flag) {
            arr[i] = 9;
        }
        result = result * 10 + arr[i];
    }
    return result;
};