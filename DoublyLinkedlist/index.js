class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    } else {
      let temp = this.head;
      while (temp.next.next) {
        temp = temp.next;
      }
      let value = temp.next.value;
      temp.next = null;
      return value;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const l1 = new LinkedList();

l1.push(1);

l1.push(2);

l1.push(3);

l1.pop();

l1.print();
