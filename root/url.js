const URL = require('url').URL;

const myURL = new URL('https://example.org:8080/foo#bar?first=john&last=doe');

console.log(myURL.href);

console.log(myURL.protocol);

console.log(myURL.pathname);

console.log(myURL.host);

console.log(myURL.port);

console.log(myURL.hostname);

console.log(myURL.hash);

console.log(myURL.search);

// You can also set these properties
myURL.port = 9999;
console.log(myURL.port);

// Inspecting search parameters
const searchParams = myURL.searchParams;

searchParams.forEach((value, name, searchParams) => {
  console.log(name, value);
});
