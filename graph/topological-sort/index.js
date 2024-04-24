const topologicalSort = (n, graph) => {
  const adjList = Array.from({ length: n }, () => []);
  const inDegree = Array(n).fill(0);
  for (const [from, to] of graph) {
    adjList[from].push(to);
    inDegree[to]++;
  }

  const queue = [];
  for (let node = 0; node < n; node++) {
    if (inDegree[node] === 0) queue.push(node);
  }

  const sortedVisit = [];
  while (queue.length) {
    const node = queue.shift();
    sortedVisit.push(node);

    for (const adjNode of adjList[node]) {
      inDegree[adjNode]--;
      if (inDegree[adjNode] === 0) queue.push(adjNode);
    }
  }

  return sortedVisit;
};

module.exports = topologicalSort;
