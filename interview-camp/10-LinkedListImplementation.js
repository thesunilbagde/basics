/*
Node store data pointer to next node
LinkedList stores head and tail and other helpers method.
*/
/*
node1 = new Node("1");
node2 = new Node("2");
node3 = new Node("3");
node4 = new Node("4");

node1.next = node2;
node2.next = node3;
node3.next = node4;
let current = node1;
let print = [ ];
while(current) {
  print.push(current.data)
  current = current.next
}

console.log(print);
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// C->R->U->D
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0
  }
  append(data) {
    let node = new Node(data)
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  prepend(data) {
   let node = new Node(data);

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next= this.head;
      this.head = node;
    }
    this.length++;
    this;
  }
  /* read */
  get(index) {
     if(index == 0) {
       return this.head.data
     }
     let currentNode = this.head;
     let currentIndex = 0;
     while(currentIndex < index    ) {
       currentNode = currentNode.next;
       currentIndex += 1;
     }
     return currentNode.data;
   }
   inserAtIndex(index, data) {
     let newNode = new Node(data);
    if(!this.head || index == 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
   }
   let current = this.head;
   let currentIndex = 0;
   while(currentIndex < (index - 1)) {
     current = current.next;
     currentIndex++;
   }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return this;
   }
  /* set (index, Node) */
  updateAtIndex(index, value) { }
  deleteAtIndex(index) {
     if(index == 0) {
       this.head = this.head.next
       this.length--;
       return this;
     }
     let currentNode = this.head;
     let currentIndex = 0;
     while(currentIndex < (index - 1)) {
       currentNode = currentNode.next;
       currentIndex += 1;
     }
    let nodeToDelete = {...currentNode.next};
     let  nodeAfterDeletedNode = currentNode.next.next;
     currentNode.next = nodeAfterDeletedNode;
     return nodeToDelete

  }
  indexOf(value) { }
  contains(value) { }
  size() {
    return this.length
  }
  toArray() {
  let current = this.head;
  let array = [];
   while(current) {
     array.push(current.data)
     current = current.next;
   }
    return array;
   }
}

let list = new LinkedList();

list.append(2);
list.append(3);
list.prepend(1)
list.prepend(0)
/*0,1,22,2,3,4*/

/*console.log("list", list);
console.log("size", list.size());
console.log("array", list.toArray());*/
 list.inserAtIndex(4,4)
 list.inserAtIndex(2,22)
//console.log("deleteAtIndex(0)",  list.deleteAtIndex(0));
console.log("deleteAtIndex(2)",  list.deleteAtIndex(2));
console.log("-",  list.toArray());
