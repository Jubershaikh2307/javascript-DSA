class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  print() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(this.list[i]);
    }
  }
}

let queue = new Queue();

queue.enqueue(1);

queue.enqueue(2);

queue.print();
