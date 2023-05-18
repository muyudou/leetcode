/**
 * https://leetcode.cn/problems/non-decreasing-subsequences/
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = [];
    let path = [];
    let len = nums.length;
    let used = [];
    const backTracking = startIndex => {
        if (path.length > 1) {
            result.push(path.slice());
        }
        let usedSet = new Set();
        for (let i = startIndex; i < len; i++) {
            if ((path.length && nums[i] < path[path.length - 1])
                || usedSet.has(nums[i])) {
                continue;
            }
            usedSet.add(nums[i]);
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }
    backTracking(0);
    return result;
};