class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  shiftUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  shiftDown(i) {
    while (this.leftChild(i) < this.size()) {
      const minChild =
        this.rightChild(i) < this.size() &&
        this.heap[this.rightChild(i)] < this.heap[minChild]
          ? this.rightChild(i)
          : this.leftChild(i);

      if (this.heap[i] <= this.heap[minChild]) break;
      this.swap(i, minChild);
      i = minChild;
    }
  }

  push(value) {
    this.heap.push(value);
    this.shiftUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) return;

    const min = this.heap[0];
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.shiftDown(0);
    return min;
  }
}

module.exports = {
  MinHeap,
};
