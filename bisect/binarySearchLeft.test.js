const binarySearchLeft = require('./binarySearchLeft');

describe('binarySearchLeft', () => {
  test('should find the correct index of an item in a sorted array', () => {
    expect(binarySearchLeft([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test('should handle the item being less than all elements', () => {
    expect(binarySearchLeft([10, 20, 30], 5)).toBe(-1);
  });

  test('should handle the item being greater than all elements', () => {
    expect(binarySearchLeft([1, 2, 3], 4)).toBe(-1);
  });

  test('should return -1 for an empty array', () => {
    expect(binarySearchLeft([], 1)).toBe(-1);
  });

  test('should return the index of the leftmost occurrence of the item', () => {
    expect(binarySearchLeft([1, 2, 2, 3, 4], 2)).toBe(1);
  });
});
