/**
 *
 * @param {any[]} comb current combination
 * @param {any[]} rests origin array
 * @param {any[][]} output result
 * @param {number} n pick n elements from rests
 * @returns {void}
 */
const combination = (comb, rests, output, n) => {
  if (comb.length == n) {
    return output.push(comb);
  }
  rests.forEach((item, idx) => {
    combination([...comb, item], rests.slice(idx + 1), output, n);
  });
};

module.exports = combination;
