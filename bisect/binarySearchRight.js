/**
 *
 * @param {number[]} arr
 * @param {number} item item to find
 * @returns {number} index of item if found, -1 otherwise
 */
function binarySearchRight(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] > item) high = mid - 1;
    else low = mid + 1;
  }
  return arr[high] === item ? high : -1;
}

module.exports = binarySearchRight;
