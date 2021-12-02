const { getFormattedInput } = require('../../lib');

/**
 * Calculate depth of submarine based on trajectory
 * https://adventofcode.com/2021/day/2
 */
(async function main() {
  const entries = await getFormattedInput('2021/2/data/input.txt');
  const getCalculatedDepth = (y, distanceTraveled, direction) =>
    y + distanceTraveled * direction;
  const output = entries.reduce(
    (totals, curr) => {
      const [xPos, yPos, aim] = totals;
      const [direction, _distance] = curr.split(/ /);
      const distance = Number(_distance);

      switch (direction) {
        case 'up':
          return [xPos, yPos, aim - distance];
        case 'down':
          return [xPos, yPos, aim + distance];
        case 'forward':
          return [
            xPos + distance,
            getCalculatedDepth(yPos, distance, aim),
            aim,
          ];
        default:
          return totals;
      }
    },
    [0, 0, 0] // x, y, aim
  );

  console.log(output[0] * output[1]);
})();
