/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (slow && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            let index1 = head;
            let index2 = slow;
            while(index1 !== index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
    }
    return -1;
};

var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let fast = head.next.next;
    let slow = head.next;
    while (fast && fast.next) {
        if (fast === slow) {
            let index1 = fast;
            let index2 = head;
            while (index1 !== index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
        fast = fast.next.next
        slow = slow.next;
    }
    return null;
};