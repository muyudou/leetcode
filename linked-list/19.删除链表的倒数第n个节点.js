/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return head;
    }
    let dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    let q = dummy;
    while (n--) {
        q = q.next;
    }
    while (q) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;
    return dummy.next;
};

var removeNthFromEnd = function(head, n) {
    let p = head;
    while(n-- > 0 && p) {
        p = p.next
    }
    const dummy = new ListNode();
    dummy.next = head;
    let q = dummy;
    while (p) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return dummy.next;
};