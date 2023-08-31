// https://leetcode.cn/problems/reverse-words-in-a-string

var reverseString = function(s, i, j) {
    while (i < j) {
        let tmp = s[j];
        s[j--] = s[i];
        s[i++] = tmp;
    }
    return s;
};

var strip = function(s) {
    let len = s.length;
    let i = 0;
    // 先删除空格
    for (let j = 0; j < len; j++) {
        if (s[j] !== ' ') {
            if (i > 0) {
                s[i++] = ' '
            }
            while (s[j] !== ' ' && j < len) {
                s[i++] = s[j++];
            }
        }
    }
    return i;
};

var reverseWords = function(s) {
    let arr = s.split('');
    // 先删除空格, 返回了新的串的长度
    let len = strip(arr);
    reverseString(arr, 0, len - 1);
    let start = 0;
    for (let i = 0; i < len; i++) {
        start = i;
        while(arr[i] !== ' ' && i < len) {
            i++;
        }
        reverseString(arr, start, i - 1);
    }
    return arr.slice(0, len).join('')
};


function strip(s) {
    let len = s.length;
    let start = 0;
    let end = len - 1;
    for (let i = 0; i < len; i++) {
        if (s[i] === ' ') {
            start++;
        } else {
            break;
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            end--;
        } else {
            break;
        }
    }
    const arr = s.split('').slice(start, end + 1);
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ' || (i > 0 && arr[i] === ' ' && arr[i-1] !== ' ')) {
            arr[j++] = arr[i];
        }
    }
    return arr.slice(0, j).join('')
}

function reverseWords(s) {
    const arr = reverseWords(s);
    const len = arr.length - 1;
    reverseString(arr, 0, len);
    let start = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] === ' ') {
            reverseString(arr, start, i - 1);
            start = i + 1;
        }
    }
    return arr.join(' ');
}