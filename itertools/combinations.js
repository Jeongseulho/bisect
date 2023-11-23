/**
 *
 * @param {any[]} arr
 * @param {number} n
 * @returns {any[][]}
 */
function combinations(arr, n) {
  if (n === 1) return arr.map((item) => [item]);
  const result = [];

  arr.forEach((fixedItem, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinationsWithoutFixedItem = combinations(rest, n - 1);
    const attached = combinationsWithoutFixedItem.map((comb) => [
      fixedItem,
      ...comb,
    ]);
    result.push(...attached);
  });

  return result;
}

module.exports = combinations;
