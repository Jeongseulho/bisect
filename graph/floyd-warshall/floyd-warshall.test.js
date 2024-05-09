const floydWarshall = require('./index');

describe('floydWarshall', () => {
  test('should return the minimum distance to each node from the start node', () => {
    const graph = [
      [0, 1, 5],
      [0, 3, 9],
      [0, 4, 1],
      [1, 2, 2],
      [2, 3, 7],
      [3, 4, 2],
    ];
    const expected = [
      [0, 5, 7, 3, 1],
      [5, 0, 2, 8, 6],
      [7, 2, 0, 7, 8],
      [3, 8, 7, 0, 2],
      [1, 6, 8, 2, 0],
    ];
    expect(floydWarshall(5, graph)).toEqual(expected);
  });
});
