function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 带虚拟头节点写法
var MyLinkedList = function() {
    this.head = new ListNode();
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size || index < 0) {
        return -1
    }
    
    let node = this.head;
    while (index-- >= 0) {
        node = node.next;
    }
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size || index < 0) {
        return;
    }
    let node = this.head;
    const newNode = new ListNode(val);
    this.size++;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    this.size--;
    let node = this.head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    node.next = node.next.next
};


/****************无虚拟头节点写法**************************/

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size || index < 0) {
        return -1
    }
    let node = this.head;
    while (index-- > 0) {
        node = node.next;
    }
    
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size || index < 0) {
        return;
    }
    let node = this.head;
    const newNode = new ListNode(val);
    this.size++;
    // 这里相当于对头节点单独处理了，head并不是虚拟头节点
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode
        return;
    }
    while (--index > 0) {
        node = node.next
    }
    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    this.size--;
    // 对头节点处理
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let node = this.head;
    while(--index > 0) {
        node = node.next;
    }
    node.next = node.next.next
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/****************循环列表写法**************************/

var MyLinkedList = function() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size || index < 0) {
        return -1
    }
    
    let node;
    if (index < this.size - index) {
        node = this.head;
        while (index-- >= 0) {
            node = node.next;
        }
    } else {
        node = this.tail;
        for (let i = 0; i < this.size - index; i++) {
            node = node.prev;
        }
    }
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size || index < 0) {
        return;
    }
    let node;
    const newNode = new ListNode(val);
    // 找到的都是前驱节点
    if (index < this.size - index) {
        node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
    } else {
        node = this.tail;
        for (let i = 0; i < this.size - index + 1; i++) {
            node = node.prev;
        }
    }
    this.size++;
    newNode.prev = node;
    newNode.next = node.next;
    let temp = node.next;
    node.next = newNode;
    temp.prev = newNode;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    // 找到的都是前驱节点
    if (index < this.size - index) {
        node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
    } else {
        node = this.tail;
        for (let i = 0; i < this.size - index + 1; i++) {
            node = node.prev;
        }
    }
    this.size--;
    node.next = node.next.next;
    node.next.prev = node;
};

