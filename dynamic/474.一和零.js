/**
 * https://leetcode.cn/problems/ones-and-zeroes/
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = new Array(m+1).fill(0).map(item => new Array(n + 1).fill(0));
    strs.forEach(item => {
        let oneNum = 0;
        let zeroNum = 0;
        // 字符串的zeroNum和oneNum相当于物品的重量
        for (let i = 0; i < item.length; i++) {
            if (item[i] === '0') {
                zeroNum++;
            } else {
                oneNum++;
            }
        };
        for (let i = m; i >= zeroNum; i--) {
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
            }
        }
    });
    return dp[m][n];
};