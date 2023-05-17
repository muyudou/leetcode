// https://leetcode.cn/problems/palindrome-partitioning/

function isPalindrome(s, startIndex, endIndex) {
    while (startIndex < endIndex) {
        if (s[startIndex] !== s[endIndex]) {
            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = []
    let path = []
    const len = s.length;
    const getPartition = (startIndex) => {
        if (startIndex >= len) {
            result.push(path.slice());
            return;
        }
        for (let i = startIndex; i < len; i++) {
            let subStr = s.slice(startIndex, i+1);
            if (isPalindrome(s, startIndex, i)) {
                path.push(subStr);
            } else {
                continue;
            }
            getPartition(i + 1);
            path.pop();
        }
    }
    getPartition(0);
    return result;
};