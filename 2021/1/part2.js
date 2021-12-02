const { getFormattedInput } = require('./lib');

/**
 * Improving upon part one, implement a three-measurement sliding window to reduce noise in the data
 * https://adventofcode.com/2021/day/1#part2
 */
function getRollingWindowTotal(arr, offset, windowSize = 3) {
  let total = 0;
  for (let i = 0, n = windowSize; i < n; i++) {
    total += arr[offset + i];
  }

  return total;
}

(async function main() {
  const input = await getFormattedInput();
  const numIncreases = input.filter((_, i, arr) => {
    return getRollingWindowTotal(arr, i) > getRollingWindowTotal(arr, i - 1);
  }).length;

  console.log(numIncreases);
})();
