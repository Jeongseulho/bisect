const { MinHeap } = require('./minHeap');

describe('minHeap', () => {
  describe('heapPush', () => {
    test('should add an item to an empty heap', () => {
      const minHeap = new MinHeap();
      minHeap.heapPush(42);
      expect(minHeap.heap).toEqual([42]);
    });

    test('should maintain the heap property when new items are added', () => {
      const minHeap = new MinHeap();
      minHeap.heapPush(42);
      minHeap.heapPush(17);
      minHeap.heapPush(23);
      expect(minHeap.heap).toEqual([17, 42, 23]);
    });
  });

  describe('heapPop', () => {
    test('should return the minimum element from the heap', () => {
      const minHeap = new MinHeap();
      minHeap.heapPush(42);
      minHeap.heapPush(17);
      minHeap.heapPush(23);
      expect(minHeap.heapPop()).toEqual(17);
    });

    test('should maintain the heap property after popping', () => {
      const minHeap = new MinHeap();
      minHeap.heapPush(42);
      minHeap.heapPush(17);
      minHeap.heapPush(23);
      minHeap.heapPop();
      expect(minHeap.heap).toEqual([23, 42]);
    });

    test('should handle popping from an empty heap', () => {
      const minHeap = new MinHeap();
      expect(minHeap.heapPop()).toBeUndefined();
    });
  });
});
