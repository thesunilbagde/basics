class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /*
        Insert node at the end 
    */
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    /*
        Remove node from end 
    */
    pop() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let newNode = current;
        while (current.next) {
            newNode = current;
            current = current.next;
        }
        this.tail = newNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    /*
        Remove node from beginning 
    */

    shift() {
        if (!this.head) {
            return null;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    /* adding a new  node at beginning of the list */
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.index) {
            return null;
        }
        let head = this.head;
        let counter = 0;
        while (counter !== index) {
            head = head.next;
            counter++;
        }
        return head;
    }
    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return node;
        }
        return null;
    }
    insertAt(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index == this.length) {
            this.push(value);
            return true;
        }
        if (index == 0) {
            this.unshift(value);
            return true;
        }

        console.log("index, value", index, value);

        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index == this.length - 1) {
            return this.pop();
        }
        if (index == 0) {
            return this.shift();
        }
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return remove;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log("arr", arr);
    }
    tranverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new SinglyLinkList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");

/*console.log("list.pop()", list.pop());
console.log("list.pop()", list.pop());
console.log("list.pop()", list.pop());*/
//console.log(list.shift());

//console.log("list", list.get(1));
//console.log("list", list.set(2, 4));

//list.insertAt(1, -1);
//console.log("list", list.get(1));
//console.log(list.print());

//list.reverse();

list.print();
list.reverse();
list.print();
