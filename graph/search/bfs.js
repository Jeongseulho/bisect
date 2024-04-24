function bfs(adjList, startNode) {
  const visited = [startNode];
  let needVisit = [startNode];

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    adjList[node].forEach((adjNode) => {
      if (!visited.includes(adjNode)) {
        needVisit.push(adjNode);
        visited.push(adjNode);
      }
    });
  }
  return visited;
}

module.exports = bfs;
