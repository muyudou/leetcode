/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let sizeA = 0;
    let sizeB = 0;
    let nodeA = headA;
    while (nodeA) {
        nodeA = nodeA.next;
        sizeA++;
    }
    let nodeB = headB;
    while (nodeB) {
        nodeB = nodeB.next;
        sizeB++;
    }
    let diff = sizeB - sizeA;
    if (diff > 0) {
        nodeB = headB;
        while(diff--) {
            nodeB = nodeB.next;
        }
    } else {
        nodeA = headA;
        while(diff--) {
            nodeA = nodeA.next;
        }
    }
    while (nodeA && nodeB) {
        if (nodeA === nodeB) {
            return nodeA;
        }
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return null;
};

var getIntersectionNode = function(headA, headB) {
   let lenA = 0
   let lenB = 0;
   let nodeA = headA;
   let nodeB = headB;
   while (nodeA) {
       nodeA = nodeA.next;
       lenA++;
   }
   while (nodeB) {
       nodeB = nodeB.next;
       lenB++;
   }
   let longList;
   let shortList;
   let diff = 0;
   if (lenA > lenB) {
       longList = headA;
       shortList = headB;
       diff = lenA - lenB;
   } else {
       longList = headB;
       shortList = headA;
       diff = lenB - lenA;
   }
   // 长链表先走diff步
   while(diff-- > 0) {
       longList = longList.next;
   }
   while(longList && shortList) {
       if (longList === shortList) {
           return longList;
       }
       longList = longList.next;
       shortList = shortList.next;
   }
   return null;
};