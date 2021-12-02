const { readFile } = require('fs/promises');
const { resolve } = require('path');

const getFormattedInput = async (path, opts) => {
  const file = resolve(__dirname, `../${path}`);

  try {
    const data = await readFile(file, 'utf8');
    const stringToArray = data.split(/\r?\n/g);

    if (opts?.toNumbers) {
      return stringToArray.map((entry) => Number(entry));
    }

    return stringToArray;
  } catch (e) {
    console.log('Could not read or format input file.', e);

    return null;
  }
};

module.exports = {
  getFormattedInput,
};
