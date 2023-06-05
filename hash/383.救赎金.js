/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {};
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];
        if (hash[char]) {
            hash[char]--;
        } else {
            return false;
        }
    }
    return true;
};