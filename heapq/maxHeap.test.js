const { heapPush, heapPop } = require('./maxHeap');

describe('maxHeap', () => {
  describe('heapPush', () => {
    test('should add an item to an empty heap', () => {
      const heap = [];
      heapPush(heap, 5);
      expect(heap).toEqual([5]);
    });

    test('should maintain the heap property when new items are added', () => {
      const heap = [4, 3, 2];
      heapPush(heap, 5);
      expect(heap).toEqual([5, 4, 2, 3]);
    });

    test('should work correctly with multiple items', () => {
      const heap = [];
      [2, 4, 1, 6, 3, 5].forEach((item) => heapPush(heap, item));
      expect(heap).toEqual([6, 4, 5, 2, 3, 1]);
    });
  });

  describe('heapPop', () => {
    test('should return the maximum element from the heap', () => {
      const heap = [5, 4, 2, 3];
      expect(heapPop(heap)).toBe(5);
    });

    test('should maintain the heap property after popping', () => {
      const heap = [5, 4, 2, 3];
      heapPop(heap);
      expect(heap).toEqual([4, 3, 2]);
    });

    test('should handle popping from an empty heap', () => {
      const heap = [];
      expect(heapPop(heap)).toBeUndefined();
    });
  });
});
