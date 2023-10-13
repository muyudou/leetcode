/**
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
var merge = function(nums1, m, nums2, n) {
    let sum = m + n;
    let i = m - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[sum--] = nums1[i];
        } else {
            nums1[sum--] = nums2[j];
        }
    }
    while (j >= 0) {
        nums1[sum--] = nums2[j];
    }
}