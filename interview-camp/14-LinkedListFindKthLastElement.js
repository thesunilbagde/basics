class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const a = new LinkedListNode("A");
const b = new LinkedListNode("B");
const c = new LinkedListNode("C");
const d = new LinkedListNode("D");
const e = new LinkedListNode("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
function kthToLastNode(k, head) {
    if (k < 1) {
        return -1;
    }
    let rightNode = head;
    let leftNode = head;
    for (let i = 0; i < k - 1; i++) {
        if (!rightNode.next) {
            return null;
        }
        rightNode = rightNode.next;
    }

    while (rightNode.next) {
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    return leftNode
}
let r = kthToLastNode(3, a);
console.log("r", r);
// Returns the node with value "Devil's Food" (the 2nd to last node)
