/**
 *
 * @param {number[]} arr
 * @param {number} item item to insert
 * @returns {number} index to insert item
 */
function bisectLeft(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] >= item) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}

module.exports = bisectLeft;
