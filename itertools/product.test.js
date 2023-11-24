const product = require('./product'); // 파일 경로에 맞게 수정해야 합니다.

describe('product', () => {
  let perm = [];
  let output = [];

  afterEach(() => {
    perm = [];
    output = [];
  });

  test('should generate all permutations with replacement for given array and n', () => {
    const rests = [1, 2, 3];
    const n = 2;
    product(perm, rests, output, n);
    expect(output).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ]);
  });

  test('should handle cases where n is 0', () => {
    const rests = [1, 2, 3];
    const n = 0;
    product(perm, rests, output, n);
    expect(output).toEqual([[]]);
  });

  test('should return empty array for empty input array', () => {
    const rests = [];
    const n = 2;
    product(perm, rests, output, n);
    expect(output).toEqual([]);
  });

  test('should handle single element in array correctly', () => {
    const rests = [1];
    const n = 2;
    product(perm, rests, output, n);
    expect(output).toEqual([[1, 1]]);
  });
});
