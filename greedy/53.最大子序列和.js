/**
 * https://leetcode.cn/problems/maximum-subarray/
 * 遍历数组，记录当前元素相当后的和，如果相加之后小于0，则sum重0开始计数，遍历过程中记录sum的最大值。
 * 局部最优解：局部和最大，遇到小于0了就清0，并且记录遍历路程中的最大和
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