class MaxHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  remove() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftchildIdx = 2 * idx + 1;
      let rightchildIdx = 2 * idx + 2;

      let swap = null;
      let leftchild = this.values[leftchildIdx];
      let rightchild = this.values[rightchildIdx];

      if (leftchildIdx < length) {
        if (element < leftchild) {
          swap = leftchildIdx;
        }
      }

      if (rightchildIdx < length) {
        if (
          (swap === null && element < rightchild) ||
          (swap !== null && leftchild < rightchild)
        ) {
          swap = rightchildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class MinHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element >= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  remove() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleDown() {
    let idx = 0;

    let element = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftIndex = 2 * idx + 1;
      let rightIndex = 2 * idx + 2;
      let swap = null;
      let leftchild = this.values[leftIndex];
      let rightchild = this.values[rightIndex];

      if (leftIndex < length) {
        if (element > leftchild) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        if (
          (swap === null && element > rightIndex) ||
          (swap !== null && leftchild > rightchild)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
