/**
 *
 * @param {any[]} perm current permutation
 * @param {any[]} rests origin array
 * @param {any[][]} output result
 * @param {number} n pick n elements from rests
 * @returns {void}
 */
const permutation = (perm, rests, output, n) => {
  if (perm.length == n) {
    return output.push(perm);
  }
  rests.forEach((item, idx) => {
    permutation(
      [...perm, item],
      [...rests.slice(0, idx), ...rests.slice(idx + 1)],
      output,
      n,
    );
  });
};

module.exports = permutation;
