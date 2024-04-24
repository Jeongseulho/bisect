const floydWarshall = require('./floyd-warshall');

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
      [0, 5, 7, 9, 1],
      [5, 0, 2, 14, 6],
      [7, 2, 0, 7, 8],
      [9, 14, 7, 0, 2],
      [1, 6, 8, 2, 0],
    ];
    expect(floydWarshall(graph)).toEqual(expected);
  });
});
