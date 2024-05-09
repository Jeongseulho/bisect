const { MaxHeap } = require('./maxHeap');

describe('maxHeap', () => {
  describe('heapPush', () => {
    test('should add an item to an empty heap', () => {
      const maxHeap = new MaxHeap();
      maxHeap.push(42);
      expect(maxHeap.heap).toEqual([42]);
    });

    test('should maintain the heap property when new items are added', () => {
      const maxHeap = new MaxHeap();
      maxHeap.push(42);
      maxHeap.push(17);
      maxHeap.push(23);
      expect(maxHeap.heap).toEqual([42, 17, 23]);
    });

    test('should work correctly with multiple items', () => {
      const maxHeap = new MaxHeap();
      maxHeap.push(42);
      maxHeap.push(17);
      maxHeap.push(23);
      maxHeap.push(11);
      maxHeap.push(12);
      maxHeap.push(6);
      maxHeap.push(7);
      maxHeap.push(9);
      maxHeap.push(2);
      maxHeap.push(1);
      expect(maxHeap.heap).toEqual([42, 17, 23, 11, 12, 6, 7, 9, 2, 1]);
    });
  });

  describe('heapPop', () => {
    test('should return the maximum element from the heap', () => {
      const maxHeap = new MaxHeap();
      maxHeap.push(42);
      maxHeap.push(17);
      maxHeap.push(23);
      expect(maxHeap.pop()).toEqual(42);
    });

    test('should maintain the heap property after popping', () => {
      const maxHeap = new MaxHeap();
      maxHeap.push(42);
      maxHeap.push(17);
      maxHeap.push(23);
      maxHeap.pop();
      expect(maxHeap.heap).toEqual([23, 17]);
    });

    test('should handle popping from an empty heap', () => {
      const maxHeap = new MaxHeap();
      expect(maxHeap.pop()).toBeUndefined();
    });
  });
});
