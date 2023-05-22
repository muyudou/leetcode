/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cur = 0;
    let next = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        next = Math.max(nums[i] + i, next);
        if (i === cur) {
            cur = next;
            count++;
        }
    }
    return count;
};