/**
 * https://leetcode.cn/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let startX = 0;
    let startY = 0;
    let offset = 1;
    let result = new Array(n).fill(0).map(item => new Array(n).fill(0));
    let count = 1;
    let loop = Math.floor(n / 2);
    while (loop-- > 0) {
        let row = startX;
        let col = startY;
        for (; col < n - offset; col++) {
            result[row][col] = count++;
        }
        for (; row < n - offset; row++) {
            result[row][col] = count++;
        }
        for (; col > startY; col--) {
            result[row][col] = count++;
        }
        for (; row > startX; row--) {
            result[row][col] = count++;
        }
        startX++;
        startY++;
        offset++;
    }
    if (n % 2 === 1) {
        let center = Math.floor(n / 2);
        result[center][center] = count;
    }
    return result;
};