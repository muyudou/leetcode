/**
 * https://leetcode.cn/problems/ti-huan-kong-ge-lcof/description/
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    const arr = s.split('');
    const len = arr.length;
    let spaceCount = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] === ' ') {
            spaceCount++;
        }
    }
    const newArrLen = len + 2 * spaceCount;
    let j = newArrLen - 1;
    let i = len - 1;
    while (i >= 0) {
        // console.log(i, arr[i])
        if (arr[i] === ' ') {
            arr[j--] = '0';
            arr[j--] = '2';
            arr[j--] = '%'
        } else {
            arr[j--] = arr[i];
        }
        i--;
    }
    return arr.join('');
};