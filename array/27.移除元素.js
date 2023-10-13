/**
 * https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 * @param {*} nums 
 * @param {*} val 
 * @returns 
 */
var removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }
    return j;
};