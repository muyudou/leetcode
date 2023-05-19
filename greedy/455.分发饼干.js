/**
 * https://leetcode.cn/problems/assign-cookies/
 * 两个数组排序，然后遍历饼干数组，如果当前满足胃口，则胃口+1，否则不动，result记录
 * @param {*} g 小朋友胃口数组
 * @param {*} s 饼干数组
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let gIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[gIndex]) {
            gIndex++;
        }
    }
    return gIndex;
};