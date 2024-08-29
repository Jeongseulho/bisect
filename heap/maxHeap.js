class MaxHeap {
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
    while (i > 0 && this.heap[this.parent(i)] < this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  shiftDown(i) {
    while (this.leftChild(i) < this.size()) {
      const maxChild =
        this.rightChild(i) < this.size() &&
        this.heap[this.rightChild(i)] > this.heap[this.leftChild(i)]
          ? this.rightChild(i)
          : this.leftChild(i);

      if (this.heap[i] >= this.heap[maxChild]) break;
      this.swap(i, maxChild);
      i = maxChild;
    }
  }

  push(value) {
    this.heap.push(value);
    this.shiftUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) return;

    const root = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.shiftDown(0);
    return root;
  }
}

module.exports = {
  MaxHeap,
};
