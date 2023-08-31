/**
 * https://leetcode.cn/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];
        if (map[val] !== undefined) {
            return [i, map[val]]
        }
        map[nums[i]] = i;
    }
    return []
};

var twoSum = function(nums, target) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(target - nums[i])) {
            return [i, hash.get(target - nums[i])];
        }
        hash.set(nums[i], i);
    }
    return [];
};