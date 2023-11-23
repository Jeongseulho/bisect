function _shiftDown(heap) {
  let targetIdx = 0;
  let leftChildIdx = 1;
  let rightChildIdx = 2;
  let largerChildIdx = leftChildIdx;
  while (largerChildIdx < heap.length) {
    if (
      rightChildIdx < heap.length &&
      heap[rightChildIdx] > heap[leftChildIdx]
    ) {
      largerChildIdx = rightChildIdx;
    } else {
      largerChildIdx = leftChildIdx;
    }

    if (heap[largerChildIdx] < heap[targetIdx]) break;

    [heap[targetIdx], heap[largerChildIdx]] = [
      heap[largerChildIdx],
      heap[targetIdx],
    ];
    targetIdx = largerChildIdx;
    leftChildIdx = targetIdx * 2 + 1;
    rightChildIdx = leftChildIdx + 1;
    largerChildIdx = leftChildIdx;
  }
}

/**
 * @param {number[]} heap
 * @param {number} newItem
 * @return {void}
 */
function heapPush(heap, newItem) {
  heap.push(newItem);
  let targetIdx = heap.length - 1;

  while (targetIdx > 0) {
    const parentIdx = (targetIdx - 1) >> 1;
    const parent = heap[parentIdx];
    if (newItem > parent) {
      heap[targetIdx] = parent;
      targetIdx = parentIdx;
      continue;
    }
    break;
  }
  heap[targetIdx] = newItem;
}

/**
 * @param {number[]} heap
 * @return {number}
 */
function heapPop(heap) {
  const lastItem = heap.pop();
  if (heap.length) {
    const maxItem = heap[0];
    heap[0] = lastItem;
    _shiftDown(heap);
    return maxItem;
  }
  return lastItem;
}

module.exports = {
  heapPush,
  heapPop,
};
