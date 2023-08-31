// https://leetcode.cn/problems/remove-linked-list-elements/

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let pre = dummy
    let cur = head
    while(cur){
        if (cur.val == val){
            cur = cur.next
            pre.next = cur
        } else {
            pre = cur
            cur = cur.next
        }
    }
    return dummy.next
};

var removeElements = function(head, val) {
    const dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = dummy.next;
    while(cur) {
        if (cur.val === val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = pre.next;
            cur = cur.next;
        }
    }
    return dummy.next;
};

var removeElements = function(head, val) {
    const dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    while(cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
}


