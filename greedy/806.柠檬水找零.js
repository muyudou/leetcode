/**
 * https://leetcode.cn/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    for (let i = 0; i < bills.length; i++) {
        let val = bills[i];
        if (val === 5) {
            five++;
        } else if (val === 10) {
            ten++;
            if (five > 0) {
                five--;
            } else {
                return false;
            }
        } else if (val === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};