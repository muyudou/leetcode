/**
 * https://leetcode.cn/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const path = [];
    const combine = (k, targetSum, startIndex) => {
        if (path.length === k) {
            if (targetSum === 0) {
                result.push(path.slice());
            }
            return;
        }
        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);
            targetSum -= i;
            if (targetSum < 0) {
                path.pop();
                targetSum += i;
                return;
            }
            combine(k, targetSum, i + 1);
            path.pop();
            targetSum += i;
        }
    }
    combine(k, n, 1);
    return result
};