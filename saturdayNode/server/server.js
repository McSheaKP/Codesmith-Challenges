const http = require('http');
const fs = require('fs');
const path = require('path');



function doOnReceivingRequest (request, response) {
  if (request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    //response.write("Hello San Diego");
   response.write(fs.readFileSync('server/index.html'))
    
    //response.write(index)
    response.end();
  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    response.write("Write back to you");
    response.end();
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    
  }
  else {
    // Handle 404 error: page not found
    // code here...
    
  }
}

const server = http.createServer(doOnReceivingRequest)

server.listen(3000)

module.exports = server;
