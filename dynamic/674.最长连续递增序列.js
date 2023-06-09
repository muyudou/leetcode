/**
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const len = nums.length;
    let dp = new Array(len).fill(1);
    let result = 1;
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
            if (dp[i] > result) {
                result = dp[i];
            }
        }
    }
    return result;
};

// 贪心算法
var findLengthOfLCIS = function(nums) {
    let max = 0;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}
