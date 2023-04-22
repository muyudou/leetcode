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