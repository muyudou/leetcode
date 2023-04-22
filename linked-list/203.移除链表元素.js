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
