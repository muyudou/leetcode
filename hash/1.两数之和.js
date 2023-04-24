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