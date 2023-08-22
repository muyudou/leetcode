/**
 * https://leetcode.cn/problems/n-queens
 * @param {number} n
 * @return {string[][]}
 */
function isValid(row, col, chessboard, n) {
    // 行是否符合
    for (let i = 0; i < n; i++) {
        if (i !== col && chessboard[row][i] === 'Q') {
            return false;
        }
    }
    // 列是否符合
    for (let i = 0; i < n; i++) {
        if (i !== row && chessboard[i][col] === 'Q') {
            return false;
        }
    }
    // 45斜角线是否符合
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chessboard[i][j] === 'Q') {
            return false
        }
    }
    for (let i = row + 1, j = col + 1; i < n && j < n; i++, j++) {
        if (chessboard[i][j] === 'Q') {
            return false
        }
    }
    // 135°是否符合
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (chessboard[i][j] === 'Q') {
            return false
        }
    }
    for (let i = row + 1, j = col - 1; i < n && j >= 0; i++, j--) {
        if (chessboard[i][j] === 'Q') {
            return false
        }
    }
    return true;
}

var solveNQueens = function(n) {
    const chessboard = new Array(n).fill('.').map(item => new Array(n).fill('.'));
    const result = [];
    const backtracking = (row) => {
        if (row === n) {
            const res = chessboard.map(item => item.join(''));
            result.push(res.slice());
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isValid(row, i, chessboard, n)) {
                chessboard[row][i] = 'Q';
                backtracking(row + 1);
                chessboard[row][i] = '.';
            }
        }
    }
    backtracking(0);
    return result;
};