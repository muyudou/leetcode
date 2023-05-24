/**
 * https://leetcode.cn/problems/partition-labels/
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(str) {
    let result = [];
    let hash = {};
    let len = str.length;
    for (let i = 0; i < len; i++) {
        hash[str[i]] = i;
    }
    let start = 0;
    let right = 0;
    for (let i = 0; i < len; i++) {
        // 这里是已出现字母的最远边界
        right = Math.max(right, hash[str[i]]);
        if (i === right) {
            result.push(i - start + 1);
            start = i + 1;
        }
    }
    return result;
};