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

var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const result = [];
    const path = [];
    const used = [];
    const backTracking = () => {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < len; i++) {
            // 同层去重，同时要排除同树枝情况下的元素相同的情况
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }
            // 同树枝已经选过的不要再选
            if (used[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            backTracking();
            path.pop();
            used[i] = false;
        }
    };
    backTracking();
    return result;
};