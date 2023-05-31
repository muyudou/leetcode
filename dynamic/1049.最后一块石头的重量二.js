/**
 * https://leetcode.cn/problems/last-stone-weight-ii/
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((pre, cur) => pre + cur, 0);
    const target = Math.floor(sum / 2);
    // dp代表容量为j的背包, 最多可以容纳的最大重量
    const dp = new Array(target + 1).fill(0);
    const len = stones.length;
    for (let i = 0; i < len; i++) {
        for (let j = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]) 
        }
    }
    return sum - dp[target] - dp[target]
};