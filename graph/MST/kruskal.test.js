const kruskal = require('./kruskal');

describe('kruskal', () => {
  test('should return minimum cost to connect all nodes in graph', () => {
    const graph = [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ];
    expect(kruskal(4, graph)).toBe(4);
  });

  test('should return 0 when graph is empty', () => {
    expect(kruskal(0, [])).toBe(0);
  });

  test('should return 0 when graph has only one node', () => {
    expect(kruskal(0, [[0, 1, 0]])).toBe(0);
  });
});
