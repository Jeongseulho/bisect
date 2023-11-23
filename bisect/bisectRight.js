/**
 *
 * @param {number[]} arr
 * @param {number} item
 * @returns {number}
 */
function bisectRight(arr, item) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] > item) high = mid;
    else low = mid + 1;
  }
  return low;
}

module.exports = bisectRight;
