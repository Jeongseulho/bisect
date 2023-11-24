/**
 *
 * @param {any[]} perm current permutation
 * @param {any[]} rests origin array
 * @param {any[][]} output result
 * @param {number} n pick n elements from rests
 * @returns {void}
 */
const product = (perm, rests, output, n) => {
  if (perm.length == n) {
    return output.push(perm);
  }
  rests.forEach((item) => {
    product([...perm, item], rests, output, n);
  });
};

module.exports = product;
