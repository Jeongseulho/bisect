const dfs = require('./dfs');

describe('dfs', () => {
  test('should return the correct order of nodes visited', () => {
    const adjList = {
      A: ['B', 'C'],
      B: ['A', 'D', 'E'],
      C: ['A', 'F'],
      D: ['B'],
      E: ['B', 'F'],
      F: ['C', 'E'],
    };
    expect(dfs(adjList, 'A')).toEqual(['A', 'B', 'C', 'F', 'E', 'D']);
  });
});
