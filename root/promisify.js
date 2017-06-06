const fs = require('fs');
const util = require('util');

// This will create a "promisified" version of fs.readFile
const readfile = util.promisify(fs.readFile);

readfile('./file-to-read.txt')   // This returns a promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
