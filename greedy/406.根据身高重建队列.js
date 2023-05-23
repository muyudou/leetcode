/**
 * https://leetcode.cn/problems/queue-reconstruction-by-height/
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((item1, item2) => {
        if (item1[0] === item2[0]) {
            return item1[1] - item2[1];  
        }
        return item2[0] - item1[0];
    })
    let result = [];
    for (let i = 0; i < people.length; i++) {
        const val = people[i];
        let targetIndex = val[1];
        if (i > targetIndex) {
            for (let j = i - 1; j >= targetIndex; j--) {
                result[j + 1] = result[j];
            }
            result[targetIndex] = val;
        } else {
            result.push(val);
        }
    }
    return result;
};