/**
 * https://leetcode.cn/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let path = [];
    candidates.sort((a, b) => a - b)
    const combine = (candidates, target, startIndex) => {
        if (target < 0) {
            return;
        }
        if (target === 0) {
            result.push(path.slice());
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i]);
            target -= candidates[i];
            // console.log(candidates[i], path, target);
            combine(candidates, target, i);
            path.pop();
            target += candidates[i];
        }
    }
    combine(candidates, target, 0);
    return result
};