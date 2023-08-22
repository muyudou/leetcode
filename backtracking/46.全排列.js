/**
 * https://leetcode.cn/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let path = [];
    let len = nums.length;
    let used = [];
    const backTracking = () => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            backTracking();
            path.pop();
            used[i] = false;
        }
    }
    backTracking();
    return result;
};

var permute = function(nums) {
    const len = nums.length;
    const result = [];
    const path = [];
    const backtracking = (used = []) => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) {
                continue;
            }
            used[i] = 1;
            path.push(nums[i]);
            backtracking(used);
            path.pop();
            used[i] = 0;
        }
    }
    backtracking();
    return result;
};