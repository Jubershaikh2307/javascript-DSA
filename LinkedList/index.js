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

  shift() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      let temp = current.value;
      this.head = current.next;
      this.length--;
      return temp;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return undefined;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
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

l1.push(2);

l1.unShift(1);

l1.push(3);

l1.shift();

l1.unShift(0);

console.log(l1.get(1));

l1.print();
