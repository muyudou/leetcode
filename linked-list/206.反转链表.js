// https://leetcode.cn/problems/reverse-linked-list/

// 递归算法
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    const newHead = reverseList(head.next)
    head.next.next = head // 想当年在这个点上愣是没想清楚，😮‍💨，现在是明白了
    head.next = null
    return newHead
};

// 迭代实现
var reverseList = function(head) {
    let pre = null
    let cur = head
    while (cur) {
        let tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
        
}

var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    return newHead;
}

var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
