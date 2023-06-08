/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
}

var maxProfit = function(prices) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(item => new Array(2).fill(0));
    dp[0][0] = 0 - prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]); // 和题目一的区别
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }
    return dp[len - 1][1];
}