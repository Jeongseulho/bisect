const floydWarshall = (graph) => {
  const n = graph.length;
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  graph.forEach(([from, to, weight]) => {
    dist[from][to] = weight;
    dist[to][from] = weight;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }
  return dist;
};

module.exports = floydWarshall;
