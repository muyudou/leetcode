/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * dp[i][0]: 持有股票状态
 * dp[i][1]: 保持卖出股票状态
 * dp[i][2]: 卖出股票状态
 * dp[i][3]: 冷冻期
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(item => new Array(4).fill(0));
    dp[0][0] = 0-prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], Math.max(dp[i-1][3] - prices[i], dp[i-1][1] - prices[i]));
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][3]);
        dp[i][2] = dp[i-1][0] + prices[i];
        dp[i][3] = dp[i-1][2];
    }
    return Math.max(dp[len-1][2], Math.max(dp[len-1][3], dp[len-1][1]));
};