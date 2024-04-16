function dfs(adjList, startNode) {
  const visited = [];
  let needVisit = [startNode];

  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...adjList[node]];
    }
  }
  return visited;
}

module.exports = dfs;
