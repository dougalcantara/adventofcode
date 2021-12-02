const { getFormattedInput } = require('../../lib');

/**
 * Improving upon part one, implement a three-measurement rolling window to reduce noise in the data
 * https://adventofcode.com/2021/day/1#part2
 */
(async function main() {
  const input = await getFormattedInput('2021/1/data/input.txt', {
    toNumbers: true,
  });
  const getWindowTotal = (arr, offset, windowSize = 3) => {
    let total = 0;
    for (let i = 0, n = windowSize; i < n; i++) {
      total += arr[offset + i];
    }
    return total;
  };
  const numIncreases = input.filter(
    (_, i, arr) => getWindowTotal(arr, i) > getWindowTotal(arr, i - 1)
  ).length;

  console.log(numIncreases);
})();
