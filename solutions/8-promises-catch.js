import fsp from 'fs/promises';

// BEGIN
const touch = (filepath) => {
  return fsp.access(filepath)
    .then(() => {})
    .catch(() => fsp.writeFile(filepath, ''));
};

export { touch };
// END