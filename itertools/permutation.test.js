const permutation = require('./permutation'); // 파일 경로에 맞게 수정해야 합니다.

describe('permutation', () => {
  let perm = [];
  let output = [];
  afterEach(() => {
    perm = [];
    output = [];
  });

  test('should generate all permutations for given array and n', () => {
    const rests = [1, 2, 3];
    const n = 2;
    permutation(perm, rests, output, n);
    expect(output).toEqual([
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
    ]);
  });

  test('should handle cases where n is greater than array length', () => {
    const rests = [1, 2, 3];
    const n = 4;
    permutation(perm, rests, output, n);
    expect(output).toEqual([]);
  });

  test('should return empty array for empty input array', () => {
    const rests = [];
    const n = 2;
    permutation(perm, rests, output, n);
    expect(output).toEqual([]);
  });

  test('should return empty array when n is 0', () => {
    const rests = [1, 2, 3];
    const n = 0;
    permutation(perm, rests, output, n);
    expect(output).toEqual([[]]);
  });
});
