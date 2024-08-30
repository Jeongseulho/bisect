/**
 *
 * @param {number[]} arr
 * @param {number} item item to find
 * @returns {number} index of item if found, -1 otherwise
 */
function binarySearchLeft(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] >= item) high = mid;
    else low = mid + 1;
  }
  return arr[low] === item ? low : -1;
}

module.exports = binarySearchLeft;
