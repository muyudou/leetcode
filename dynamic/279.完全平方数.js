/**
 * https://leetcode.cn/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        const value = i * i;
        for (let j = value; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - value] + 1)
        }
    }
    return dp[n];
};