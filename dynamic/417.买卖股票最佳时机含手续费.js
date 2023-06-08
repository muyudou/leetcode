/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(item => new Array(2).fill(0));
    dp[0][0] = 0 - prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i] - fee);
    }
    return dp[len - 1][1];
};