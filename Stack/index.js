class Stack {
  constructor() {
    this.item = [];
  }

  push(value) {
    this.item.push(value);
  }

  pop() {
    return this.item.pop();
  }

  peek() {
    let length = this.item.length;
    if (length === 0) return null;
    return this.item[length - 1];
  }

  print() {
    for (let i = 0; i < this.item.length; i++) {
      console.log(this.item[i]);
    }
  }
}

let stack = new Stack();

stack.push(1);

stack.push(2);

stack.push(3);

stack.pop();

console.log(stack.peek());

stack.print();
