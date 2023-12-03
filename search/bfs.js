function bfs (adjList, startNode)  {
  const visited = [];
  let needVisit = []; 

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = needVisit.concat(adjList[node]);
    }
  }
  return visited;
};

module.exports = bfs;