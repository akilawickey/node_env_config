import http from 'http';
var config = require('../config');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(config.platform1.port, config.platform1.host);

console.log('Server1 running');
