//sending content type headers in node
response.writeHead(statusCode[, statusMessage][, headers])

Returns a reference to the ServerResponse, so that calls can be chained.

const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);


// internet media type, wikipedia, check the list of common media types, for our project, type text, text/html
// As part of HTTP specification, or how servers and browsers agrees to talk to each other, there are values that are hidden from the user called headers. 
// These headers can be programmatically created by the clients and the service. once each headed that the service ends, it is called Content Type.
// This instructs the browser how to handle the string of information in the response. 

const commonHeaders = {'Content-Type': 'text/html'};    // original as text/plain



//HTTP POST body
There are two common HTTP methods or ways to communicate with an HTTP server - GET and POST
Get - you are retrieving information from a website address
POST - encodes the form content into a query string at the end of the URL, where POST sends the form contents as part of the request body
When you create a form, you can specify which method to use, GET or POST

