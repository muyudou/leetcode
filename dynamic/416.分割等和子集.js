/**
 * https://leetcode.cn/problems/partition-equal-subset-sum/
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
    }
    if (sum % 2 === 1) {
        return false;
    }
    const target = sum / 2;
    const dp = new Array(target + 1).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-nums[i]] + nums[i]);
        }
    }
    return dp[target] === target;
};