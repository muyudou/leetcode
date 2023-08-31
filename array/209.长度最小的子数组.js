/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let result = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let total = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        total += nums[j];
        while (sum >= target) {
            const length = j - i + 1;
            result = Math.min(result, length);
            sum -= nums[i++];
        }
    }
    if (total < target) {
        return 0;
    }
    return result;
};

var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let minLen = Infinity;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= target) {
            minLen = Math.min(j - i + 1, minLen);
            sum -= nums[i];
            i++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};