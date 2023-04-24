// https://leetcode.cn/problems/intersection-of-two-arrays/
var intersection = function(nums1, nums2) {
    let hash = {};
    let res = new Set();
    for (let i = 0; i < nums1.length;i++){
        hash[nums1[i]] = hash[nums1[i]] ? hash[nums1[i]]++ : 1
    };
    for (let i = 0;i < nums2.length;i++) {
        if(hash[nums2[i]]) {
            res.add(nums2[i])
        }
    }
    return Array.from(res.values())
}