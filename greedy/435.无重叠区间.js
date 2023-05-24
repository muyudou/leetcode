/**
 * https://leetcode.cn/problems/non-overlapping-intervals/
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let count = 0;
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        // 区间重叠
        if (intervals[i][0] < intervals[i - 1][1]) {
            count++;
            intervals[i][1] = Math.min(intervals[i][1], intervals[i-1][1]);
        }
    }
    return count;
};