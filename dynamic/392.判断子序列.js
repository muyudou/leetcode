/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const len1 = s.length;
    const len2 = t.length;
    const dp = new Array(len1 + 1).fill(0).map(item => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = dp[i][j-1];
            }
        }
    }
    return dp[len1][len2] === len1;
};