import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
  let lastCheckTime = Date.now();
  let lastModifiedTime = null;
  
  const checkFile = () => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        callback(err);
        return;
      }
      
      const currentModifiedTime = stats.mtimeMs;
      
      if (lastModifiedTime === null) {
        lastModifiedTime = currentModifiedTime;
        return;
      }
      
      if (currentModifiedTime > lastModifiedTime) {
        lastModifiedTime = currentModifiedTime;
        callback(null);
      }
    });
  };
  
  const timerId = setInterval(checkFile, interval);
  return timerId;
};

export default watch;
// END
