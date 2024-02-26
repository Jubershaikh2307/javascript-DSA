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

  print() {
    while (this.head) {
      console.log(this.head.value);
      this.head = this.head.next;
    }
  }
}

let l1 = new LinkedList();

l1.push(1);

l1.push(2);

l1.push(3);

l1.push(4);

l1.push(5);

l1.pop();

l1.push(6);

l1.print();
