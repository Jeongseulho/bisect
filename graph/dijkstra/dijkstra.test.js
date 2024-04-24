const dijkstra = require('./index');

describe('dijkstra', () => {
  test('should return the minimum distance to each node from the start node', () => {
    const n = 6;
    const graph = [
      [0, 1, 2],
      [0, 2, 5],
      [0, 3, 5],
      [1, 3, 3],
      [2, 3, 3],
      [2, 4, 1],
      [3, 4, 1],
      [3, 5, 1],
      [4, 5, 4],
    ];
    const start = 0;
    const expected = [0, 2, 5, 5, 6, 6];
    expect(dijkstra(n, graph, start)).toEqual(expected);
  });

  test('should return the minimum distance to each node from the start node', () => {
    const n = 5;
    const graph = [
      [0, 1, 1],
      [0, 2, 2],
      [0, 3, 3],
      [0, 4, 4],
    ];
    const start = 0;
    const expected = [0, 1, 2, 3, 4];
    expect(dijkstra(n, graph, start)).toEqual(expected);
  });
});
