const combinations = require('./combinations');

describe('combinations', () => {
  test('should return combinations of length 1 for single element arrays', () => {
    const arr = [1];
    const n = 1;
    expect(combinations(arr, n)).toEqual([[1]]);
  });

  test('should return all combinations of length n from the array', () => {
    const arr = [1, 2, 3];
    const n = 2;
    expect(combinations(arr, n)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });

  test('should return an empty array if n is larger than array length', () => {
    const arr = [1, 2];
    const n = 3;
    expect(combinations(arr, n)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const arr = [];
    const n = 1;
    expect(combinations(arr, n)).toEqual([]);
  });
});
