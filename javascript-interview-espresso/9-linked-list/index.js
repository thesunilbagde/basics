class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Node(element);
        let current = null;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
    }

    print() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.value + " => ";
            current = current.next;
        }
        return str;
    }
}
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(5);

//console.log("  ", list.print());

let node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
let head = new Node(0);
head.next = node;
/*let on = head;
while (on !== null) {
    console.log("on", on.value);
    on = on.next;
}*/

function removeNthFromEnd(head, n) {
    let on = head;
    let length = 1;

    while (on) {
        length++;
        on = on.next;
    }
    let leftIndex = length - n - 1;

    if (leftIndex === 0) {
        return head.next;
    }
    on = head;
    while (leftIndex-- > 1) {
        on = on.next;
    }
    on.next = on.next.next;
    return head;
}
//let r = removeNthFromEnd(head, 3);

function reverseList(head) {
    let on = head;
    let prev = null;

    // 1->2->3
    while (on !== null) {
        let temp = on.next;
        /* t on
         on p
         p o 
         o t*/
        on.next = prev;
        prev = on;
        on = temp;
    }
    return prev;
}
console.log(JSON.stringify(reverseList(head), null, 2));
