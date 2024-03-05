class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// This is for the BST = Binary search Tree
class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
  }
}

let tree = new Tree();
