const { getFormattedInput } = require('../../lib');

/**
 * Reduce 2-axis navigational data to a single number value
 * https://adventofcode.com/2021/day/2
 */
(async function main() {
  const entries = await getFormattedInput('2021/2/data/input.txt');
  const output = entries
    .reduce(
      (totals, curr) => {
        const [xPos, yPos] = totals;
        const [direction, _distance] = curr.split(/ /);
        const distance = Number(_distance);

        switch (direction) {
          case 'up':
            return [xPos, yPos - distance];
          case 'down':
            return [xPos, yPos + distance];
          case 'forward':
            return [xPos + distance, yPos];
          default:
            return totals;
        }
      },
      [0, 0]
    )
    .reduce((x, y) => x * y);

  console.log(output);
})();
