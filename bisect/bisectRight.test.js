const bisectRight = require('./bisectRight'); // Adjust the path according to your project structure

describe('bisectRight', () => {
  test('should find the correct insert position for an item in a sorted array', () => {
    expect(bisectRight([1, 2, 4, 5], 3)).toBe(2);
  });

  test('should handle the item being less than all elements', () => {
    expect(bisectRight([10, 20, 30], 5)).toBe(0);
  });

  test('should handle the item being greater than all elements', () => {
    expect(bisectRight([1, 2, 3], 4)).toBe(3);
  });

  test('should place the item at the rightmost position if it already exists', () => {
    expect(bisectRight([1, 2, 2, 3, 4], 2)).toBe(3);
  });

  test('should return 0 for an empty array', () => {
    expect(bisectRight([], 1)).toBe(0);
  });
});
