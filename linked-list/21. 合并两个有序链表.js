/**
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 * 构造一个新数组
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node1 = list1;
    let node2 = list2;
    let newHead = new ListNode();
    let node = newHead;
    while (node1 && node2) {
        const newNode = new ListNode();
        if (node1.val < node2.val) {
            newNode.val = node1.val;
            node1 = node1.next;
        } else {
            newNode.val = node2.val;
            node2 = node2.next;
        }
        node.next = newNode;
        node = newNode;
    }
    if (node1) {
        node.next = node1;
    }
    if (node2) {
        node.next = node2;
    }
    return newHead.next;
};

/**
 * 插入链表1中
 * @param {*} list1 
 * @param {*} list2 
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode();
    dummyHead.next = list1;
    let pre = dummyHead;
    let cur = list1;
    let node2 = list2;

    while (cur && node2) {
        // list1节点小于list2的节点，则无需操作，pre和cur向后走一步
        if (cur.val < node2.val) {
            pre = pre.next;
            cur = cur.next;
        } else {
            let tmp = node2.next;
            pre.next = node2;
            node2.next = cur;
            pre = node2;
            node2 = tmp;
        }
    }
    if (node2) {
        pre.next = node2;
    }
    return dummyHead.next;
}