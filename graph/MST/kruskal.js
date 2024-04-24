const { unionParent, isSameParent } = require('./union-find');

const kruskal = (n, graph) => {
  graph.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);
  let minCost = 0;

  for (const [from, to, weight] of graph) {
    if (!isSameParent(parent, from, to)) {
      unionParent(parent, from, to);
      minCost += weight;
    }
  }

  return minCost;
};

module.exports = kruskal;
