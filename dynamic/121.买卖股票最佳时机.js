/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let result = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(prices[i] - min, result);
    }
    return result;
};

/**
 * dp[i][0]: 第i天持有股票的最大价值，dp[i][1]: 第i天不持有股票的最大价值
 * dp[i][0] = max(dp[i-1][0], -prices[i]) 前天持有股票，今天不变以及前天不持有股票，今天买入的最大值
 * dp[i][1] = max(dp[i-1][1], dp[i-1][0] + prices[i])， 前天不持有股票，今天依然不持有，以及今天卖出的最大值
 * dp[0][0] = -prices[0], dp[0][1] 0
 * @param {} prices 
 */
var maxProfit = function(prices) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(item => new Array(2).fill(0));
    dp[0][0] = 0 - prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], 0 - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }
    return dp[len - 1][1]
}