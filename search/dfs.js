function dfs(adjList, startNode) {
  const visited = [startNode];
  let needVisit = [startNode];

  while (needVisit.length) {
    const node = needVisit.pop();
    adjList[node].forEach((adjNode) => {
      if (!visited.includes(adjNode)) {
        needVisit.push(adjNode);
        visited.push(adjNode);
      }
    });
  }
  return visited;
}

module.exports = dfs;
