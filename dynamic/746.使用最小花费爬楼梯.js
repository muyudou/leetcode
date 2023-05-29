/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = [0, 0];
    const len = cost.length;
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[len];
};

var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    let dp1 = 0;
    let dp2 = 0;
    for (let i = 2; i <= len; i++) {
        // 这里注意dp1对应cost[i-2] dp2对应cost[i-1]
        const newVal = Math.min(dp1 + cost[i - 2], dp2 + cost[i - 1]);
        dp1 = dp2;
        dp2 = newVal;
    }
    return dp2;
};