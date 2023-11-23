const { heapPush, heapPop } = require('./minHeap');

describe('minHeap', () => {
  describe('heapPush', () => {
    test('should add an item to an empty heap', () => {
      const heap = [];
      heapPush(heap, 5);
      expect(heap).toEqual([5]);
    });

    test('should maintain the heap property when new items are added', () => {
      const heap = [2, 3, 4];
      heapPush(heap, 1);
      expect(heap).toEqual([1, 2, 4, 3]);
    });

    test('should work correctly with multiple items', () => {
      const heap = [];
      [5, 3, 6, 1, 4, 2].forEach((item) => heapPush(heap, item));
      expect(heap).toEqual([1, 3, 2, 5, 4, 6]);
    });
  });

  describe('heapPop', () => {
    test('should return the minimum element from the heap', () => {
      const heap = [1, 2, 4, 3];
      expect(heapPop(heap)).toBe(1);
    });

    test('should maintain the heap property after popping', () => {
      const heap = [1, 2, 4, 3];
      heapPop(heap);
      expect(heap).toEqual([2, 3, 4]);
    });

    test('should handle popping from an empty heap', () => {
      const heap = [];
      expect(heapPop(heap)).toBeUndefined();
    });
  });
});
