/**
 * 有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。
 * **每件物品都有无限个（也就是可以放入背包多次）** ，求解将哪些物品装入背包里物品价值总和最大。
   **完全背包和01背包问题唯一不同的地方就是，每种物品有无限件**。
   dp[i]: 重量为i的背包可以得到的最大价值
   dp[i] = max(dp[i], dp[i - weight[j]] + value[j])
 */

var completePack = function (weight, value, bagWeight) {
    const dp = new Array(bagWeight + 1).fill(0);
    const len = value.length;
    // 先遍历背包，后遍历物品
    for (let i = 0; i <= bagWeight; i++) {
        for (let j = 0; j <= len; j++) {
            if (i >= weight[j]) {
                dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
            }
        }
    }
    return dp[bagWeight];
}

var completePack = function (weight, value, bagWeight) {
    const dp = new Array(bagWeight + 1).fill(0);
    const len = value.length;
    // 先遍历物品，后遍历背包
    for (let i = 0; i < len; i++) {
        for (let j = weight[i]; j <= bagWeight; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    return dp[bagWeight];
}

var value = [15, 20,30];
var weight = [1, 3, 4];
var bagWeight = 4;
completePack(weight, value, bagWeight);
