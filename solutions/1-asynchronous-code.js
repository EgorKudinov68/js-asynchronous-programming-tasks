import fs from 'fs';

// BEGIN
const print = (filepath) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

export default print;
// END
