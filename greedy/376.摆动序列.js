/**
 * https://leetcode.cn/problems/wiggle-subsequence/
 * 遍历元素，记录前面两个数之差，以及当前两个数之差，如果pre <= 0 && cur > 0 说明遇到了波峰，结果+1，并将prediff进行更新
 * @param {*} nums 
 * @returns 
 */
var wiggleMaxLength = function(nums) {
    let result = 0;
    let preDiff = 0;
    let curDiff = 0;
    let len = nums.length;
    if (len <= 2) {
        return len;
    }
    for (let i = 0; i < nums.length; i++) {
        curDiff = nums[i+1] - nums[i];
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
            result++;
            preDiff = curDiff;
        }
    }
    return result + 1;
};