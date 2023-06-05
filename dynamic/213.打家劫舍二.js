/**
 * dp[i]: 偷窃前i个房间得到的最高金额
 * 考虑第1个：区间 1 - len-1
 * 考虑最后一个：2-len
 * 初始化：dp[0] = 0, dp[1] = nums[0]
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    if (len === 2) {
        return Math.max(nums[0], nums[1]);
    }
    var robInner = (nums, start, end) => {
        const dp = new Array(end - start + 1).fill(0);
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);
        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }
        return dp[end];
    }
    const left = robInner(nums, 0, len - 2);
    const right = robInner(nums, 1, len - 1);
    return Math.max(left, right);
};