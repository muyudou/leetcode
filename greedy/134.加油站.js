/**
 * https://leetcode.cn/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let curSum = 0;
    let totalSum = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i];
        curSum += diff;
        totalSum += diff;
        if (curSum < 0) {
            start = i + 1;
            curSum = 0;
        }
    }
    if (totalSum < 0) {
        return -1;
    }
    return start;
};