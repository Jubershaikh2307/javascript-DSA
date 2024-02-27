class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = value;
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
    }
    this.length++;
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
      this.length--;
      return value;
    }
  }

  unShift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  print() {
    while (this.head) {
      console.log(this.head.value);
      this.head = this.head.next;
    }
  }
}

let l1 = new LinkedList();

l1.push(2);

l1.unShift(1);

l1.push(3);

l1.unShift(0);

l1.print();
