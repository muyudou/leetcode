function bag01(weight, value, bagweight) {
    const len = weight.length;

    // 二维数组：包含bagweight，所以初始化为bagweight+1个元素
    const dp = new Array(len).fill(0).map(item => new Array(bagweight + 1).fill(0));

    // 初始化：第一行的元素如果放的下物品0，则初始化为0的重量
    for (let j = weight[0]; j <= bagweight; j++) {
        dp[0][j] = value[0];
    }

    // 第一行已经初始化完成，所以初始化从第2行开始
    for (let i = 1; i < len; i++) {
        // 包含bageweight是<=
        for (let j = 1; j <= bagweight; j++) {
            // 如果当前背包重量放不下该元素，则直接初始化为上一行的值
            if (weight[j] > j) {
                dp[i][j] = dp[i-1][j];
            } else {
                // 否则取最大值
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
            }
        }
    }
    
    // 最后一行的最后一个元素
    return dp[len-1][bagweight];
}

function bag02(weight, value, bagweight) {
    const len = weight.length;

    // 一维数组
    const dp = new Array(bagweight + 1).fill(0);

    for (let i = 0; i < len; i++) {
        for (let j = bagweight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-weight[i]] + value[i])
        }
    }
    return dp[bagweight];
}

function bag03(weight, value, bagweight) {
    let len = weight.length;
    // dp[i][j]: 代表从0-i个物品中选择放入背包重量为j的背包中的最大价值
    let dp = new Array(len).fill(0).map(item => new Array(bagweight + 1).fill(0));
    for (let j = 1; j <= bagweight; j++) {
        if (j > weight[0]) {
            dp[0][j] = value[0];
        }
    }
    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= bagweight; j++) {
            // 背包重量装不下第i个物品，则直接取前i-1个物品最大值
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j];
            } else { // 装得下第i个物品，则取装物品的i的价值和不装物品i的最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }
    return dp[len - 1][bagweight];
}

// 滚动数组：一维数组解法
function bag04(weight, value, bagweight) {
    const len = weight.length;
    let dp = new Array(bagweight + 1).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = bagweight; j > 0; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    return dp[bagweight];
}

const weight = [1, 3, 4];
const value = [15, 20, 30];
const bagweight = 4;

// bag01(weight, value, bagweight);
// bag02(weight, value, bagweight);

bag03(weight, value, bagweight);
bag04(weight, value, bagweight);

