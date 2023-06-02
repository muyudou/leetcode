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

// 一步一个台阶，两个台阶，三个台阶，.......，直到 m个台阶。问有多少种不同的方法可以爬到楼顶呢？
var climbStairsm = function(n, m) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= m; i++) {
            if (j >= i) {
                dp[j] += dp[j - i];
            }
        }
    }
    return dp[n];
};

climbStairsm(4, 2)