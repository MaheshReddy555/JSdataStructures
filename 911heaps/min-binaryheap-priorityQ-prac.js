//not working, get back

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queues = [];
  }

  insert(val, priority) {
    let newNode = new Node(val, priority);
    this.queues.push(newNode);
    if (this.queues.length === 1) {
      return this.queues;
    }

    this.bubbleup();
    return this;
  }

  bubbleup() {
    let lastchildIndex = this.queues.length - 1;
    let lastchild = this.queues[this.queues.length - 1];
    let lastchildParentIndex = Math.floor((lastchildIndex - 1) / 2);

    while (lastchildIndex >= 0) {
      lastchildParentIndex = Math.floor((lastchildIndex - 1) / 2);

      if (lastchild.priority >= this.queues[lastchildParentIndex].priority)
        break;
      if (lastchild.priority < this.queues[lastchildParentIndex].priority) {
        let temp = lastchild;
        this.queues[lastchildParentIndex] = lastchild;
        this.queues[lastchildIndex] = temp;

        lastchildIndex = lastchildParentIndex;
      }
    }
  }

  sinkdown() {
    let idx = 0;
    let temp = this.queues[0];
    this.queues[0] = this.queues[this.queues.length - 1];
    this.queues[this.queues.length - 1] = this.queues[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let swap = null;

      if (leftChildIdx < this.queues.length) {
        if (this.queues[leftChildIdx].priority < this.queues[0].priority) {
          swap = leftChildIdx;
        }
      }

      if (
        (swap === null &&
          this.queues[rightChildIdx].priority < this.queues[0].priority) ||
        (swap !== null &&
          this.queues[rightChildIdx].priority <
            this.queues[leftChildIdx].priority)
      ) {
        swap = rightChildIdx;
      }

      if (swap === null) break;

      let swaptempelem = this.queues[0];
      this.queues[0] = this.queues[swap];
      this.queues[swap] = swaptempelem;

      idx = swap;
    }
  }

  remove() {
    if (this.queues.length === 1) {
      this.queues = [];
      return this;
    }

    this.queues.pop();
    this.sinkdown();

    return this;
  }
}

let ER = new PriorityQueue();
ER.insert("common cold", 5);
ER.insert("gunshot wound", 1);
ER.insert("high fever", 4);
ER.insert("broken arm", 2);
ER.insert("glass in foot", 3);
console.log("*********************");
console.log(ER.queues);
