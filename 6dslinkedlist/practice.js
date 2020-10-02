class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(newval) {
    let newNode = new Node(newval);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //set the link bewteen current last node and the coming new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log(this);
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log("****", current.val, current.next);
      current = current.next;
    }

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTrail = current;
    while (current.next) {
      newTrail = current;
      current = current.next;
    }
    this.tail = newTrail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  unshift(newval) {
    let newNode = new Node(newval);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let existinghead = this.head;
      newNode.next = existinghead;
    }
    this.head = newNode;
    this.length++;
    console.log(this);
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.val = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  get(inval) {
    if (!this.head || inval >= this.length || inval < 0) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== inval) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(indexval, val) {
    let changeNode = this.get(indexval);
    if (changeNode) {
      changeNode.val = val;
      return true;
    }
    return false;
  }

  insert(indexval, val) {
    if (inval > this.length || inval < 0) {
      return false;
    }
    if (indexval === this.length) {
      this.push(val);
      return true;
    }

    if (indexval === 0) {
      this.unshift(val);
      return true;
    }
    let prevNode = this.get(indexval - 1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(indexval, val) {
    if (inval > this.length || inval < 0) {
      return false;
    }
    if (indexval === this.length - 1) {
      this.pop(val);
      return true;
    }

    if (indexval === 0) {
      this.shift(val);
      return true;
    }
    let prevNode = this.get(indexval - 1);
    let removedNode = this.get(indexval);
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let current;
    let head = this.head;
    let tail = this.tail;

    this.head = tail;
    this.tail = head;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {}
  }
}

var list = new SinglyLinkedList();
list.push("how");
list.push("are");
list.push("you");
list.traverse();
console.log("starting pop");
list.pop();
list.shift("yeah");
