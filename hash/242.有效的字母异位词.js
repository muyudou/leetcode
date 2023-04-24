// https://leetcode.cn/problems/valid-anagram/

var isAnagram = function(s, t) {
    let hash = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt() - 'a'.charCodeAt();
        hash[index]++;
    }
    for (let j = 0; j < t.length; j++) {
        let index = t[j].charCodeAt() - 'a'.charCodeAt();
        if (!hash[index]) {
            return false;
        }
        hash[index]--
    }
    for (let i = 0; i < hash.length; i++) {
        if (hash[i]) {
            return false
        }
    }
    return true
};
