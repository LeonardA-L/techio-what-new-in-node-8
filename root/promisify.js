const fs = require('fs');
const util = require('util');

const readfile = util.promisify(fs.readFile);

readfile('/some/file')
  .then((data) => { /** ... **/ })
  .catch((err) => { /** ... **/ });
