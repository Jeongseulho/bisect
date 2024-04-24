const topologicalSort = require('./index');

describe('topologicalSort', () => {
  test('should return the order of nodes in topological order', () => {
    const graph = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ];
    expect(topologicalSort(4, graph)).toEqual([0, 1, 2, 3]);
  });

  test('should return the order of nodes in topological order', () => {
    const graph = [
      [0, 1],
      [0, 4],
      [1, 2],
      [1, 5],
      [4, 5],
      [2, 3],
      [5, 3],
      [3, 6],
    ];
    expect(topologicalSort(7, graph)).toEqual([0, 1, 4, 2, 5, 3, 6]);
  });
});
