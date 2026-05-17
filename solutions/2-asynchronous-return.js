import fs from 'fs';

// BEGIN
const write = (filepath, data, callback) => {
  fs.writeFile(filepath, data, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    callback();
  });
};

export default write;
// END