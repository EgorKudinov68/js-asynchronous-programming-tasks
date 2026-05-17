import fsp from 'fs/promises';

// BEGIN
const exchange = async (filepath1, filepath2) => {
  const [data1, data2] = await Promise.all([
    fsp.readFile(filepath1),
    fsp.readFile(filepath2),
  ]);
  
  await Promise.all([
    fsp.writeFile(filepath1, data2),
    fsp.writeFile(filepath2, data1),
  ]);
};

export { exchange };
// END