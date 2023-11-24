const combination = require('./combination');

describe('combination', () => {
  let comb = [];
  let output = [];
  afterEach(() => {
    comb = [];
    output = [];
  });

  test('should return combination of length 1 for single element arrays', () => {
    const rests = [1];
    const n = 1;
    combination(comb, rests, output, n);
    expect(output).toEqual([[1]]);
  });

  test('should return all combination of length n from the array', () => {
    const rests = [1, 2, 3];
    const n = 2;
    combination(comb, rests, output, n);
    expect(output).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });

  test('should return an empty array if n is larger than array length', () => {
    const rests = [1, 2];
    const n = 3;
    combination(comb, rests, output, n);
    expect(output).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const rests = [];
    const n = 1;
    combination(comb, rests, output, n);
    expect(output).toEqual([]);
  });

  test('should return empty array when n is 0', () => {
    const rests = [1, 2, 3];
    const n = 0;
    combination(comb, rests, output, n);
    expect(output).toEqual([[]]);
  });
});
