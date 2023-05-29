/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    let dp1 = 0;
    let dp2 = 1;
    for (let i = 2; i <= n; i++) {
        const sum = dp1 + dp2;
        dp1 = dp2;
        dp2 = sum;
    }
    return dp2;
}
