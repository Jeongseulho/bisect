class MaxHeap {
  constructor() {
    this.heap = [];
  }

  _shiftDown() {
    let targetIdx = 0;

    while (true) {
      let leftChildIdx = targetIdx * 2 + 1;
      let rightChildIdx = leftChildIdx + 1;

      if (leftChildIdx >= this.heap.length) break;

      let largerChildIdx =
        rightChildIdx < this.heap.length &&
        this.heap[rightChildIdx] > this.heap[leftChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      if (this.heap[largerChildIdx] <= this.heap[targetIdx]) break;

      [this.heap[targetIdx], this.heap[largerChildIdx]] = [
        this.heap[largerChildIdx],
        this.heap[targetIdx],
      ];
      targetIdx = largerChildIdx;
    }
  }

  push(newItem) {
    this.heap.push(newItem);
    let targetIdx = this.heap.length - 1;

    while (targetIdx > 0) {
      const parentIdx = (targetIdx - 1) >> 1;
      const parent = this.heap[parentIdx];
      if (newItem <= parent) break;
      this.heap[targetIdx] = parent;
      targetIdx = parentIdx;
    }
    this.heap[targetIdx] = newItem;
  }

  pop() {
    const lastItem = this.heap.pop();
    if (this.heap.length) {
      const maxItem = this.heap[0];
      this.heap[0] = lastItem;
      this._shiftDown(this.heap);
      return maxItem;
    }
    return lastItem;
  }
}
module.exports = {
  MaxHeap,
};
