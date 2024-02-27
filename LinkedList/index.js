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
      this.length--;
      return current.value;
    }
  }

  set(index, value) {
    const newNode = new Node(value);
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      temp.value = value;
    }
    this.length++;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index == 0) {
      this.unShift(value);
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return undefined;
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      temp.next = temp.next.next;
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

l1.set(0, 5);

l1.insert(2, 6);

l1.remove(1);

// console.log(l1.get(1));

l1.print();
