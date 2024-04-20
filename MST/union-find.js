const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  n1 < n2 ? (parent[n2] = n1) : (parent[n1] = n2);
};

const isSameParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  return n1 === n2;
};

module.exports = { getParent, unionParent, isSameParent };
