/**
 * https://leetcode.cn/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const len = nums.length;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < len; j++) {
            if (i >= nums[j]) {
                 dp[i] += dp[i - nums[j]];
            }
        }
    }
    return dp[target];
}