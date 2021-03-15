class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    read(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return currentNode.data;
    }
    insertAtIndex(index, value) {
        let node = new Node(value);
        if (index == 0) {
            node.next = this.head;
            this.head = node;
            this.length++;
            return;
        }
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        node.next = currentNode.next;
        currentNode.next = node;
    }
    indexOf(value) {
        console.log("value", value);
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            console.log("currentNode", currentNode);
            if (currentNode.data == value) {
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return null
    }
    deleteAtIndex(index) {
       if(index === 0) {
           this.head = this.head.next;
           return;
       }
       let currentNode = this.head;
       let currentIndex = 0;
       while(currentIndex < (index - 1)) {
           currentNode = currentNode.next; 
           currentIndex += 1; 
       } 
       let nodeAfterDeleted = currentNode.next.next;
        currentNode.next  = nodeAfterDeleted;
    }
    toArray() {
        let currentNode = this.head;
        let array = [];

        while (currentNode) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }
}

let list = new LinkedList();
list.insertAtIndex(0, 1);
list.insertAtIndex(1, 2);
list.insertAtIndex(2, 3);
list.insertAtIndex(3, 4);
list.insertAtIndex(4, 5);
console.log("", list.toArray());
list.deleteAtIndex(4)

console.log("", list.toArray());
