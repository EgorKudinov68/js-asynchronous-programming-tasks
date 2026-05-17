import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const filePaths = files.map(file => path.join(dirpath, file));

    async.map(filePaths, fs.stat, (statErr, stats) => {
      if (statErr) {
        callback(statErr);
        return;
      }

      const sizes = stats
        .filter(stat => stat.isFile())
        .map(stat => stat.size);

      const totalSize = _.sumBy(sizes);
      callback(null, totalSize);
    });
  });
};

export { getDirectorySize };
// END
