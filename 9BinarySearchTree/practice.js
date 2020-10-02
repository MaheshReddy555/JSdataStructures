class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let foundplace = false;
    let rootChild = this.root;
    while (!foundplace) {
      if (val === rootChild.value) return undefined;
      if (val < rootChild.value && !rootchild.left) {
        rootChild.left = val;
        foundplace = true;
      } else if (val < rootChild.value && rootChild.left) {
        rootChild = rootChild.left;
      }

      if (val > rootChild.value && !rootchild.right) {
        rootChild.right = val;
        foundplace = true;
      } else if (val > rootChild.value && rootChild.right) {
        rootChild = rootChild.right;
      }
    }

    return this;
  }
}
