// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
var reverseString = function(s, i, j) {
    while (i < j) {
        let tmp = s[j];
        s[j--] = s[i];
        s[i++] = tmp;
    }
    return s;
};

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    const arr = s.split('')
    reverseString(arr, 0, n - 1);
    reverseString(arr, n, s.length - 1);
    reverseString(arr, 0, s.length - 1);
    return arr.join('')
};

var reverseLeftWords = function(s, n) {
    const arr = s.split('');
    const len = arr.length;
    reverseString(arr, 0, n - 1);
    reverseString(arr, n, len - 1);
    reverseString(arr, 0, len - 1);
    return arr.join('')
}
