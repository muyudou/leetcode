/**
 * https://leetcode.cn/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    const len = coins.length;
    for (let i = 0; i < len; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    if (dp[amount] === Number.MAX_VALUE) {
        return -1;
    }
    return dp[amount];
};