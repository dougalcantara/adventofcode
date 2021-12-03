const { getFormattedInput, binaryToDecimal } = require('../../lib');
const CHAR_COUNT = 12;

const getMostAtPosition = (arr, position, flip = false) => {
  let zCount = 0,
    oCount = 0;

  for (let i = 0, n = arr.length; i < n; i++) {
    arr[i].charAt(position) === '0' ? zCount++ : oCount++;
  }

  return zCount > oCount ? (flip ? 1 : 0) : flip ? 0 : 1;
};

const getRateByType = (arr, type) => {
  const template = new Array(12).fill(0);
  for (let i = 0, n = CHAR_COUNT; i < n; i++) {
    template[i] = getMostAtPosition(arr, i, type === 'e');
  }

  return binaryToDecimal(template.join(''));
};

/**
 * Find gamma & epsilon rates from the diagnostic report
 * https://adventofcode.com/2021/day/3
 */
(async function main() {
  const entries = await getFormattedInput('2021/3/data/input.txt');
  // could definitely avoid needing two different calls
  const gamma = getRateByType(entries, 'g');
  const epsilon = getRateByType(entries, 'e');

  console.log(gamma * epsilon);
})();
