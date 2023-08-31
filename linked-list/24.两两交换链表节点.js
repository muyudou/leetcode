/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 迭代法，记录pre节点进行操作
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let dummy = new ListNode()
    dummy.next = head;
    let pre = dummy;
    while (pre.next && pre.next.next) {
        let p = pre.next;
        let q = pre.next.next;

        p.next = q.next;
        q.next = p;
        pre.next = q;

        pre = p;
    }
    return dummy.next;
};

// 递归法：交换前两个节点，head.next是剩余节点递归后的头节点
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

/**
 * 最初的版本1，变量多，不清晰
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let dummy = new ListNode()
    let pre = dummy;
    let p = head;
    let q = p.next;
    let next = q.next;
    while (p && q) {
        q.next = p;
        p.next = next;
        pre.next = q;
        if (!next || !next.next) {
            break;
        }
        pre = p;
        p = next;
        q = next.next;
        next = q.next;
    }
    return dummy.next;
};

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = dummy.next;
    while (cur && cur.next) {
        let next = cur.next;
        let tmp = cur.next.next;

        cur.next = next.next;
        next.next = cur;
        pre.next = next;

        pre = cur;
        cur = tmp;
    }
    return dummy.next;
}
