class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(newItem) {
    this.heap.push(newItem);
    let targetIdx = this.heap.length - 1;

    while (targetIdx > 0) {
      const parentIdx = (targetIdx - 1) >> 1;
      const parent = this.heap[parentIdx];
      if (newItem >= parent) break;
      this.heap[targetIdx] = parent;
      targetIdx = parentIdx;
    }
    this.heap[targetIdx] = newItem;
  }

  pop() {
    const lastItem = this.heap.pop();
    if (this.heap.length) {
      const minItem = this.heap[0];
      this.heap[0] = lastItem;
      _shiftDown(this.heap);
      return minItem;
    }
    return lastItem;
  }
}

module.exports = {
  MinHeap,
};
