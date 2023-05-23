/**
 * https://leetcode.cn/problems/candy/
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    const candyArr = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyArr[i] = candyArr[i - 1] + 1;
        }
    }
    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candyArr[i] = Math.max(candyArr[i], candyArr[i + 1] + 1);
        }
    }
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += candyArr[i];
    }
    return sum;
};