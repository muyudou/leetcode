/**
 * https://leetcode.cn/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const len = s.length;
    const dp = new Array(len).fill(false).map(item => new Array(len).fill(false));
    let result = 0;
    for (let i = len - 1; i >= 0; i--) {
        for (j = i; j < len; j++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else if (j - i <= 1) {
                dp[i][j] = true;
                result++;
            } else if (dp[i+1][j-1]){
                dp[i][j] = true;
                result++;
            }
        }
    }
    return result;
};