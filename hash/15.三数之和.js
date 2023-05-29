/**
 * https://leetcode.cn/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    if (nums[0] > 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
};