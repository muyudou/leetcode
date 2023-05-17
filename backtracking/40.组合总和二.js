/**
 * https://leetcode.cn/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    let path = [];
    let used = new Array(candidates.length).fill(0);
    candidates.sort((a, b) => a - b)
    const combine = (candidates, target, startIndex, used) => {
        if (target === 0) {
            result.push(path.slice());
            return;
        }
        for (let i = startIndex; i < candidates.length && target - candidates[i] >= 0; i++) {
            if (i > 0 && candidates[i] === candidates[i - 1] && !used[i-1]) {
                continue;
            }
            if (target < 0) {
                return;
            }
            path.push(candidates[i]);
            target -= candidates[i];
            used[i] = 1;
            combine(candidates, target, i + 1, used);
            path.pop();
            target += candidates[i];
            used[i] = 0;
        }
    }
    combine(candidates, target, 0, used);
    return result;
};