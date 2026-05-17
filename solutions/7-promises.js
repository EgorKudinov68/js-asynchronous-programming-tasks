import fsp from 'fs/promises';

// BEGIN
const reverse = async (filepath) => {
  try {
    const data = await fsp.readFile(filepath, 'utf-8');
    const lines = data.split('\n');
    const reversedLines = lines.reverse();
    const reversedData = reversedLines.join('\n');
    await fsp.writeFile(filepath, reversedData, 'utf-8');
  } catch (err) {
    throw err;
  }
};

export { reverse };
// END