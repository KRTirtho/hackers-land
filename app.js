const http = require('http');
http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
}).listen(3000);
console.log('Server running on http://localhost:3000');

console.log("I'm fine");