const { getFormattedInput, binaryToDecimal } = require('../../lib');

const getRateByType = (arr, type = 'o') => {
  let i = 0;

  while (arr.length > 1) {
    const oCount = arr.reduce(
      (total, curr) => (curr[i] === '1' ? total + 1 : total),
      0
    );
    const mostFrequent = oCount < arr.length / 2 ? '0' : '1';
    const value = type === 'c' ? mostFrequent : String(1 - mostFrequent);
    arr = arr.filter((entry) => entry[i] === value);
    i++;
  }

  return arr.shift();
};

/**
 * Find o2 & co2 rates from the diagnostic report
 * https://adventofcode.com/2021/day/3#part2
 */
(async function main() {
  const entries = await getFormattedInput('2021/3/data/input.txt');

  const o2 = getRateByType(entries);
  const co2 = getRateByType(entries, 'c');

  console.log(binaryToDecimal(o2) * binaryToDecimal(co2));
})();
