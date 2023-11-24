const combinationsWithReplacement = require('./combinationsWithReplacement');

describe('combinationsWithReplacement', () => {
  let comb = [];
  let output = [];
  afterEach(() => {
    comb = [];
    output = [];
  });

  test('should return combinationsWithReplacement of length 1 for single element arrays', () => {
    const rests = [1];
    const n = 1;
    combinationsWithReplacement(comb, rests, output, n);
    expect(output).toEqual([[1]]);
  });

  test('should return all combinationsWithReplacement of length n from the array', () => {
    const rests = [1, 2, 3];
    const n = 2;
    combinationsWithReplacement(comb, rests, output, n);
    expect(output).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 2],
      [2, 3],
      [3, 3],
    ]);
  });

  test('should return an array of all possible combinations with replacement for the given array and selection count', () => {
    const rests = [1, 2];
    const n = 3;
    combinationsWithReplacement(comb, rests, output, n);
    expect(output).toEqual([
      [1, 1, 1],
      [1, 1, 2],
      [1, 2, 2],
      [2, 2, 2],
    ]);
  });

  test('should handle empty arrays', () => {
    const rests = [];
    const n = 1;
    combinationsWithReplacement(comb, rests, output, n);
    expect(output).toEqual([]);
  });

  test('should return empty array when n is 0', () => {
    const rests = [1, 2, 3];
    const n = 0;
    combinationsWithReplacement(comb, rests, output, n);
    expect(output).toEqual([[]]);
  });
});
