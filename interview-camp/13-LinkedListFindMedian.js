class LinkedListNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

const a = new LinkedListNode(6);
const b = new LinkedListNode(5);
const c = new LinkedListNode(4);
const d = new LinkedListNode(3);
const e = new LinkedListNode(2);
const f = new LinkedListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function findMedian(head) {
    let slow = head;
    let fast = head;
    let preOfSlow = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        preOfSlow = slow;
        slow = slow.next;
    }
    if (fast != null) {
        return slow.data;
    } else {
        return parseFloat((slow.data + preOfSlow.data) / 2);
    }
}
let result = findMedian(a);
console.log("result", result);
