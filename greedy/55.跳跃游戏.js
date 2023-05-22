/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxScale = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i + nums[i] > maxScale) {
            maxScale = i + nums[i];
        }
        if (maxScale > len) {
            return true;
        }
    }
    return false;
};