/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function isValid(row, col, chess, num, n) {
    // 行上是否有相同数字
    for (let i = 0; i < n; i++) {
        if (chess[row][i] === num) {
            return false;
        }
    }
    // 列上是否有相同数字
    for (let i = 0; i < n; i++) {
        if (chess[i][col] === num) {
            return false;
        }
    }
    const startRow = parseInt(row / 3, 10);
    const startCol = parseInt(col / 3, 10);
    for (let i = startRow * 3; i < (startRow + 1) * 3; i++) {
        for (let j = startCol * 3; j < (startCol + 1) * 3; j++)
        if (chess[i][j] === num) {
            return false;
        }
    }
    return true;
}

var solveSudoku = function(board) {
    const len = board.length;
    const backtracking = () => {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (board[i][j] !== '.') {
                    continue;
                }
                for (let k = 1; k <= 9; k++) {
                    if (isValid(i, j, board, '' + k, len)) {
                        board[i][j] = '' + k;
                        if (backtracking(board)) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    };
    backtracking();
    return board;
};