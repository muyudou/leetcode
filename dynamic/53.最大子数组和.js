/**
 * https://leetcode.cn/problems/maximum-subarray/
 * 贪心算法：持续加元素计算最大值，如果当前的和小于0了，则从头开始计算，因为如果负数继续相加都是减小的。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > result) {
            result = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return result;
};

var maxSubArray = function(nums) {
    const len = nums.length;
    const dp = new Array(len).fill(0);
    dp[0] = nums[1];
    let result = dp[0];
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        if (dp[i] > result) {
            result = dp[i];
        }
    }
    return result;
}