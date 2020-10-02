class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 12 ---->3 -----> 15
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldtail = this.tail;
      this.tail = newNode;
      oldtail.next = newNode;
      newNode.prev = oldtail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldtail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = nul;
      this.length--;
      return oldtail;
    }
    let oldtailprev = oldtail.prev;
    this.tail = oldtailprev;
    oldtail.prev = null;
    this.tail.next = null;
    this.length--;
    return oldtail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldhead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = nul;
    } else {
      this.head = oldhead.next;
      this.head.prev = null;
      oldhead.next = null;
      this.length--;
    }

    return oldhead;
  }

  // 12 ---->3 -----> 15

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldhead = this.head;
      oldhead.prev = newNode;
      newNode.next = oldhead;
      newNode.prev = null;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 12 <---->3 <-----> 15

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let midpoint = Math.floor(this.length / 2);
    let currentNode;
    if (index < midpoint) {
      currentNode = this.head;
      for (let i = 0; i <= index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i >= index; i--) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  // 12 <---->3 <-----> 15
  //not using reusable code
  sett(val, index) {
    if (!this.head) return false;
    if (this.length === 1) {
      this.head.val = val;
      return true;
    }

    if (this.length === val) {
      this.push(val);
      return true;
    }
    let middlevalue = this.length / 2;
    let currentNode;
    let previuosNode;
    // let nextNode;
    if (index < middlevalue) {
      currentNode = this.head;
      previuosNode = this.head.prev;
      //   nextNode = this.head.next;
      while (index != middlevalue) {
        currentNode.next = currentNode;
      }
    } else {
      currentNode = this.tail;
      previuosNode = this.tail.prev;
      //   nextNode = this.tail
      while (index != middlevalue) {
        currentNode.next = currentNode;
      }
    }

    currentNode.val = val;
    previuosNode.val = val;
    return true;
  }

  //using usable code
  set(index, val) {
    let nodetochange = this.get(index);
    if (nodetochange) {
      nodetochange.val = val;
      let prevnode = nodetochange.prev;
      prevnode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let oldIndxNode = this.get(index);
    let oldPrevIndexNode = oldIndxNode.prev;
    let oldNextIndexNode = oldIndxNode.next;
    oldNextIndexNode.prev = newNode;
    oldPrevIndexNode.next = newNode;
    oldIndxNode.prev = newNode;
    newNode.prev = oldPrevIndexNode;
    newNode.next = oldIndxNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let oldIndxNode = this.get(index);
    let oldPrevIndexNode = oldIndxNode.prev;
    let oldNextIndexNode = oldIndxNode.next;

    oldPrevIndexNode.next = oldNextIndexNode;
    oldNextIndexNode.prev = oldPrevIndexNode;
    oldIndxNode.next = null;
    oldIndxNode.prev = null;
    this.length--;
    return oldIndxNode;
  }

  reverse() {
    let oldhead = this.head;
    let oldtail = this.tail;
    this.head = oldtail;
    this.tail = oldhead;
    let count = this.length;
    let current = this.tail;
    while (count > 0) {
      console.log(current.val);
      let tempnext = current.next;
      let tempprev = current.prev;
      current.next = tempprev;
      current.prev = tempnext;
      current = current.prev;
      count--;
    }
    console.log("woe", this.head.val, this.head.next, this.tail.val);
    return this;
  }
}
