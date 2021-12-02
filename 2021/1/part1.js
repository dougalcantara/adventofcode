const { getFormattedInput } = require('../../lib');

/**
 * Given the input, count the # of times a line's value exceeds its preceding line's value
 * https://adventofcode.com/2021/day/1#part1
 */
(async function main() {
  const entries = await getFormattedInput('2021/1/data/input.txt', {
    toNumbers: true,
  });

  const count = entries.reduce((total, curr, i) => {
    const last = entries[i - 1];
    const isGreaterThanPreviousLine = last && curr > last;

    if (isGreaterThanPreviousLine) {
      return total + 1;
    }

    return total;
  }, 0);

  console.log(count);
})();
