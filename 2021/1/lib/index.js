const { readFile } = require('fs/promises');
const { resolve } = require('path');

const getFormattedInput = async () => {
  const file = resolve(__dirname, '../data/input.txt');

  try {
    const data = await readFile(file, 'utf8');

    return data.split(/\r?\n/g).map((entry) => Number(entry));
  } catch (e) {
    console.log('Could not read or format input file.', e);

    return null;
  }
};

module.exports = {
  getFormattedInput,
};
