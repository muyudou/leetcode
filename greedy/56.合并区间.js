/**
 * https://leetcode.cn/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    result.push(intervals[0]);
    let len = intervals.length;
    for (let i = 1; i < len; i++) {
        right = result[result.length - 1][1];
        if (intervals[i][0] <= right) {
            let max = Math.max(right, intervals[i][1]);
            result[result.length - 1][1] = max;
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};