const { MinHeap } = require('./minHeap');

describe('minHeap', () => {
  describe('heapPush', () => {
    test('should add an item to an empty heap', () => {
      const minHeap = new MinHeap();
      minHeap.push(42);
      expect(minHeap.heap).toEqual([42]);
    });

    test('should maintain the heap property when new items are added', () => {
      const minHeap = new MinHeap();
      minHeap.push(42);
      minHeap.push(17);
      minHeap.push(23);
      expect(minHeap.heap).toEqual([17, 42, 23]);
    });
  });

  describe('heapPop', () => {
    test('should return the minimum element from the heap', () => {
      const minHeap = new MinHeap();
      minHeap.push(42);
      minHeap.push(17);
      minHeap.push(23);
      expect(minHeap.pop()).toEqual(17);
    });

    test('should maintain the heap property after popping', () => {
      const minHeap = new MinHeap();
      minHeap.push(42);
      minHeap.push(23);
      expect(minHeap.heap).toEqual([23, 42]);
    });

    test('should handle popping from an empty heap', () => {
      const minHeap = new MinHeap();
      expect(minHeap.pop()).toBeUndefined();
    });
  });
});
