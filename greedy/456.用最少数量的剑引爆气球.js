/**
 * https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const len = points.length;
    if (len < 1) {
        return 0;
    }
    points.sort((a, b) => a[0] - b[0]);
    let result = 1;
    for (let i = 1; i < len; i++) {
        if (points[i][0] > points[i - 1][1]) {
            result++;
        } else {
            points[i][1] = Math.min(points[i][1], points[i - 1][1]);
        }
    }
    return result;
};