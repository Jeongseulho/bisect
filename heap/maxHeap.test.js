const { MaxHeap } = require('./maxHeap');

describe('maxHeap', () => {
  describe('heapPush', () => {
    test('should add an item to an empty heap', () => {
      const maxHeap = new MaxHeap();
      maxHeap.heapPush(42);
      expect(maxHeap.heap).toEqual([42]);
    });

    test('should maintain the heap property when new items are added', () => {
      const maxHeap = new MaxHeap();
      maxHeap.heapPush(42);
      maxHeap.heapPush(17);
      maxHeap.heapPush(23);
      expect(maxHeap.heap).toEqual([42, 17, 23]);
    });

    test('should work correctly with multiple items', () => {
      const maxHeap = new MaxHeap();
      maxHeap.heapPush(42);
      maxHeap.heapPush(17);
      maxHeap.heapPush(23);
      maxHeap.heapPush(11);
      maxHeap.heapPush(12);
      maxHeap.heapPush(6);
      maxHeap.heapPush(7);
      maxHeap.heapPush(9);
      maxHeap.heapPush(2);
      maxHeap.heapPush(1);
      expect(maxHeap.heap).toEqual([42, 17, 23, 11, 12, 6, 7, 9, 2, 1]);
    });
  });

  describe('heapPop', () => {
    test('should return the maximum element from the heap', () => {
      const maxHeap = new MaxHeap();
      maxHeap.heapPush(42);
      maxHeap.heapPush(17);
      maxHeap.heapPush(23);
      expect(maxHeap.heapPop()).toEqual(42);
    });

    test('should maintain the heap property after popping', () => {
      const maxHeap = new MaxHeap();
      maxHeap.heapPush(42);
      maxHeap.heapPush(17);
      maxHeap.heapPush(23);
      maxHeap.heapPop();
      expect(maxHeap.heap).toEqual([23, 17]);
    });

    test('should handle popping from an empty heap', () => {
      const maxHeap = new MaxHeap();
      expect(maxHeap.heapPop()).toBeUndefined();
    });
  });
});
