const list = require("./10-LinkedListImplementation1")


function hasCycle(head) {

  let fast = head;
  let slow = head;

  while(fast != null) {
    fast = fast.next;
    if(fast == slow) {
      return true;
    }
    if(fast != null) {
      fast = fast.next;
      if(fast == slow) {
        return true;
      }
      slow = slow.next
    }
  }
  return false;

}
let r = hasCycle(list)
console.log("r", r);
