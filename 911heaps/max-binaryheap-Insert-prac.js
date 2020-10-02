class MaxBinaryHeap {
  constructor() {
    this.maxBinHeapArr = [];
  }

  insert(val) {
    this.maxBinHeapArr.push(val);
    if (this.maxBinHeapArr.length === 1) return this;

    let lastindex = this.maxBinHeapArr.length - 1;
    while (lastindex >= 0) {
      console.log(lastindex);
      let currentParentIndex = Math.floor((lastindex - 1) / 2);

      if (this.maxBinHeapArr[currentParentIndex] < val) {
        let temp = this.maxBinHeapArr[lastindex];
        this.maxBinHeapArr[lastindex] = this.maxBinHeapArr[currentParentIndex];
        this.maxBinHeapArr[currentParentIndex] = temp;
        lastindex = currentParentIndex;
      } else {
        console.log(this);

        return this;
      }
    }
    console.log(this);
    return this;
  }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(5);
maxHeap.insert(18);
maxHeap.insert(20);
maxHeap.insert(50);
maxHeap.insert(22);
maxHeap.insert(100);
