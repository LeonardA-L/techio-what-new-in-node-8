const URL = require('url').URL;

const myURL = new URL('https://example.org:8080/foo?first=john&last=doe#bar');

console.log(`## Properties:
  href:     ${myURL.href}
  protocol: ${myURL.protocol}
  pathname: ${myURL.pathname}
  host:     ${myURL.host}
  port:     ${myURL.port}
  hostname: ${myURL.hostname}
  hash:     ${myURL.hash}
  search:   ${myURL.search}
`);

// You can also set these properties
myURL.port = 9999;
console.log('New port:', myURL.port);

// Inspecting search parameters
console.log('## Search Parameters:');
const searchParams = myURL.searchParams;

searchParams.forEach((value, name) =>
  console.log(name, ':', value);
);
