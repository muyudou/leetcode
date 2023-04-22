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