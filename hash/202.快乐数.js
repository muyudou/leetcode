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

var isHappy = function(n) {
  const hash = new Set();
  const map = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
  let str = n + '';
  let sum = 0;
  while (1) {
    for (let i = 0; i < str.length; i++) {
      sum += map[str[i]];
    }
    if (sum === 1) {
      return true;
    }
    if (hash.has(sum)) {
      return false;
    }
    hash.add(sum);
    str = sum + '';
    sum = 0;
  }
}