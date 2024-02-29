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
      this.length--;
      return value;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    let temp = this.head;
    if (!this.head) {
      return null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  get(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(vlue);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
  }

  remove(index) {
    const temp = this.get(index);

    const before = this.get(index - 1);

    const after = this.get(index + 1);

    before.next = after;
    after.prev = before;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
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

l1.push(4);

l1.push(5);

l1.pop();

l1.unshift(0);

l1.shift();

l1.get(1);

l1.set(1, 99);

l1.insert(1, 100);

l1.remove(1);

l1.print();
