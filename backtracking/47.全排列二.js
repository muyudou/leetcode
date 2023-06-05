/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let path = [];
    let used = [];
    let len = nums.length;
    const backtracking = () => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        const levelUsedSet = new Set();
        for (let i = 0; i < len; i++) {
            if (used[i] || levelUsedSet.has(nums[i])) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            levelUsedSet.add(nums[i]);
            backtracking();
            path.pop();
            used[i] = false;
        }
    }
    backtracking();
    return result;
};