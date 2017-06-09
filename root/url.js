const URL = require('url').URL;

const myURL = new URL('https://example.org:8080/foo?first=john&last=doe#bar');

console.log('### Properties');

console.log('href: ', myURL.href);
console.log('protocol: ', myURL.protocol);
console.log('pathname: ', myURL.pathname);
console.log('host: ', myURL.host);
console.log('port: ', myURL.port);
console.log('hostname: ', myURL.hostname);
console.log('hash: ', myURL.hash);
console.log('search: ', myURL.search);

// You can also set these properties
myURL.port = 9999;
console.log('New port: ', myURL.port);

// Inspecting search parameters

console.log('### Search Parameters');

const searchParams = myURL.searchParams;

searchParams.forEach((value, name, searchParams) => {
  console.log(name, ':', value);
});
