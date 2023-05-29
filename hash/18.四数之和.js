/**
 * https://leetcode.cn/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let result = [];
    for (let i = 0; i < len - 3; i++) {
        if (nums[i] > target && nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            if (nums[i] + nums[j] > target && nums[i] + nums[j] >= 0) {
                break;
            }
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = len - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum > target) {
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while(left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
    }
    return result;
};