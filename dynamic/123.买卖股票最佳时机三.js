/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
 * `dp[i][1]`: 第一次买卖持有股票：可能是维持前一天买入状态或者第i天买入
*   `dp[i][2]`: 第一次买卖不持有股票
*   `dp[i][3]`: 第二次买卖持有股票
*   `dp[i][4]`: 第二次买卖不持有股票
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(item => new Array(5).fill(0));
    dp[0][1] = 0 - prices[0];
    dp[0][3] = 0 - prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][1] = Math.max(dp[i - 1][1], 0 - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }
    return dp[len - 1][4];
};