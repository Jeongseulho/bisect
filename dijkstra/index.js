const dijkstra = (n, graph, startNode) => {
  const visited = Array(n).fill(false);
  const minDist = Array(n).fill(Infinity);

  const adjList = Array.from({ length: n }, () => []);

  graph.forEach(([from, to, weight]) => {
    adjList[from].push([to, weight]);
  });

  const getMinDistNode = () => {
    let min = Infinity;
    let node = -1;
    for (let i = 0; i < n; i++) {
      if (!visited[i] && min > minDist[i]) {
        min = minDist[i];
        node = i;
      }
    }
    return node;
  };

  const startDijkstra = (startNode) => {
    minDist[startNode] = 0;

    for (let i = 0; i < n; i++) {
      const node = getMinDistNode();
      visited[node] = true;
      for (const [adjNode, weight] of adjList[node]) {
        if (!visited[adjNode])
          minDist[adjNode] = Math.min(minDist[node] + weight, minDist[adjNode]);
      }
    }
  };

  startDijkstra(startNode);

  return minDist;
};

module.exports = dijkstra;
