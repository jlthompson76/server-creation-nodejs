let fs = require('fs');
let http = require('http');

// .createServer requires a callback function
// but that callback function must have 2 parameters

let server = http.createServer(on_request);

// request (Incoming Message), response (Outgoing Message)
function on_request(request, response) {
    console.log("Hey! I got a request");
    console.log(request.url);
    let text = "Hello World!";
    // This writes data I want to send back to browser.
    response.write(text);
    // This tells that response has ended. Now send that data.
    response.end();
}

// Start up the server
// First parameter is a PORT number
// Second parameter is an OPTIONAL callback function
let PORT = 9000;
server.listen(PORT, on_server_start);

function on_server_start() {
    console.log("Server started");
}
