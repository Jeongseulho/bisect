function bfs(adjList, startNode) {
  const visited = [];
  let needVisit = [startNode];

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...adjList[node]];
    }
  }
  return visited;
}

module.exports = bfs;
