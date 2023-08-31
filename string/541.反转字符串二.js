/**
    2k间隔往前走，s = "abcdefg", k = 2
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseString = function(s, left, right) {
    let i = left;
    let j = right - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    console.log(s);
    return s;
};

var reverseStr = function(s, k) {
    if (!s) {
        return;
    }
    const arr = s && s.split('');
    const len = arr.length;
    let i = 0;
    for (; i < len; i += 2 * k) {
        reverseString(arr, i, i + k);
    }
    const leftCharLen = len - i;
    if (leftCharLen < k) {
        reverseString(arr, i, len);
    } else if (leftCharLen > k) {
        reverseString(arr, i, i + k);
    }
    return arr.join('');
}