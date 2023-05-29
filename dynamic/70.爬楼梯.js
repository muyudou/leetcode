/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    const dp = [1, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    let dp1 = 1;
    let dp2 = 2;
    for (let i = 3; i <= n; i++) {
        const sum = dp1 + dp2;
        dp1 = dp2;
        dp2 = sum
    }
    return dp2;
};