/**
 * https://leetcode.cn/problems/coin-change-ii/
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const len = coins.length;
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < len; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
};