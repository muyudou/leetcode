/**
 * https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let len = nums.length;
    let sum = 0;
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
    for (let i = 0; i < len; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = 0 - nums[i];
            k--;
        }
    }
    if (k > 0 && k % 2 === 1) {
        nums[len - 1] = 0 - nums[len - 1]; 
    }
    for (let i = 0; i < len; i++) {
        sum += nums[i];
    }
    return sum
};