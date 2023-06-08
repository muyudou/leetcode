/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(item => new Array(2 * k + 1).fill(0));
    for (let j = 1; j < 2 * k; j += 2) {
        dp[0][j] = 0 - prices[0];
    }
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < 2 * k - 1; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
        }
    }
    return dp[len - 1][2 * k];
};