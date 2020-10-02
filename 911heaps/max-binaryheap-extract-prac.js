class MaxBinaryHeap {
  constructor() {
    this.maxBinHeapArr = [];
  }

  insert(val) {
    this.maxBinHeapArr.push(val);
    if (this.maxBinHeapArr.length === 1) return this;

    let lastindex = this.maxBinHeapArr.length - 1;
    while (lastindex >= 0) {
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
    return this;
  }

  //[ 100, 22, 50, 5, 20, 18 ]
  extract() {
    if (this.maxBinHeapArr.length === 0) return undefined;
    if (this.maxBinHeapArr.length === 1) {
      this.maxBinHeapArr = [];
      console.log(this);
      return this;
    }

    let temp = this.maxBinHeapArr[0];
    this.maxBinHeapArr[0] = this.maxBinHeapArr[this.maxBinHeapArr.length - 1];
    this.maxBinHeapArr.pop();

    // [ 18, 22, 50, 5, 20 ]
    // [ 50,  22, 18, 5, 20]
    //  [ 50,  22, 20, 5, 18]
    let rootIndex = 0;
    let rootValue = this.maxBinHeapArr[rootIndex];
    while (true) {
      //   console.log(rootIndex, rootValue);
      let rootLeftAndRight = [
        {
          index: 2 * rootIndex + 1,
          value: this.maxBinHeapArr[2 * rootIndex + 1],
        },
        {
          index: 2 * rootIndex + 2,
          value: this.maxBinHeapArr[2 * rootIndex + 2],
        },
      ];
      if (
        rootLeftAndRight[0].index > this.maxBinHeapArr.length ||
        rootLeftAndRight[0].index > this.maxBinHeapArr.length
      ) {
        return temp;
      }

      if (
        rootValue > rootLeftAndRight[0].value &&
        rootValue > rootLeftAndRight[1].value
      ) {
        break;
      }
      let max;
      let swapIndex = null;
      for (let i = 0; i < rootLeftAndRight.length; i++) {
        if (rootLeftAndRight[i].value > rootValue) {
          max = rootLeftAndRight[i].value;
          swapIndex = rootLeftAndRight[i].index;
        }
      }

      if (swapIndex === null) break;
      let swap = this.maxBinHeapArr[0];
      this.maxBinHeapArr[0] = this.maxBinHeapArr[swapIndex];
      this.maxBinHeapArr[swapIndex] = swap;

      rootValue = this.maxBinHeapArr[swapIndex];
      rootIndex = swapIndex;
    }
    console.log("object", this);
    return temp;
  }
}

let maxHeap = new MaxBinaryHeap();
// maxHeap.insert(5);
// maxHeap.insert(18);
// maxHeap.insert(20);
// maxHeap.insert(50);
// maxHeap.insert(22);
// maxHeap.insert(100);

maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

console.log("88888888888");
maxHeap.extract();
maxHeap.extract();
maxHeap.extract();
maxHeap.extract();
maxHeap.extract();
maxHeap.extract();
maxHeap.extract();
