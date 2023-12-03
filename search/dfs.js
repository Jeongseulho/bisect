function dfs (adjList, startNode) {
  const visited = []; 
  let needVisit = []; 

  needVisit.push(startNode); 

  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = needVisit.concat(adjList[node]);
    }
  }
  return visited;
};

module.exports = dfs;