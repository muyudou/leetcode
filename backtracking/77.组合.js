/**
 * https://leetcode.cn/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function(n, k) {
    let path = [];
    let result = [];
    const backTracking = function(n, k, startIndex) {
        if (path.length === k) {
            result.push(path.slice(0));
            return;
        }
        for (let i = startIndex; i < n - (k - path.length) + 1; i++) {
            path.push(i+1)
            backTracking(n, k, i + 1);
            path.pop();
        }
    }
    backTracking(n, k, 0);
    return result;
};