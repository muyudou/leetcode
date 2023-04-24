// https://leetcode.cn/problems/happy-number/
function getSum(n) {
  let sum = 0;
  while (n) {
    let cur = n % 10;
    sum += cur * cur;
    n = Math.floor(n / 10);
  }
  return sum;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let hash = {};
  let val = n;
  while (1) {
    val = getSum(val);
    if (hash[val]) {
      return false;
    }
    hash[val] = 1;
    if (val == 1) {
      return true;
    }
  }
};
