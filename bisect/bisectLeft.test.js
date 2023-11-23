const bisectLeft = require('./bisectLeft');

describe('bisectLeft', () => {
  test('should find the correct insert position for an item in a sorted array', () => {
    expect(bisectLeft([1, 2, 4, 5], 3)).toBe(2);
  });

  test('should handle the item being less than all elements', () => {
    expect(bisectLeft([10, 20, 30], 5)).toBe(0);
  });

  test('should handle the item being greater than all elements', () => {
    expect(bisectLeft([1, 2, 3], 4)).toBe(3);
  });

  test('should place the item at the leftmost position if it already exists', () => {
    expect(bisectLeft([1, 2, 2, 3, 4], 2)).toBe(1);
  });

  test('should return 0 for an empty array', () => {
    expect(bisectLeft([], 1)).toBe(0);
  });
});
