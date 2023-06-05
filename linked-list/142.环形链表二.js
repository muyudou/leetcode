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