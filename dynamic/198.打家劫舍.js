/**
 * dp[i]: 偷窃前i个房间得到的最高金额
 * 递推公式: 
 *  偷窃i，dp[i] = dp[i - 2] + nums[i]
 *  不偷窃i，dp[i] = dp[i - 1]
 * 初始化：dp[0] = nums[0] dp[1] = max(nums[0], nums[1])
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    const dp = new Array(len + 1).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i - 2] + nums[i]);
    }
    return dp[len - 1];
};
