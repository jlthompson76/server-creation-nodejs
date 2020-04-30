// Here we are importing http module 
let http = require('http');
const PORT = 3000;

// We are creating a server. We have also specified that whenever a request comes on our server,
// the 'on_request' function will trigger.
let server = http.createServer(on_request);

// Here the server has started listening for any request on the specified PORT. In the callback function,
// we specify that as soon as the server starts listening, please print us a message 'Server is running at PORT'
server.listen(PORT, () => console.log(`Server is running at ${PORT}`));

// This is the function that is triggered each time our server receives a request from the browser.
// It must have 2 parameters. The INCOMING request and the OUTGOING response our server will send back.
function on_request(request, response) {
    // We extract the URL our user wanted to visit
    const url_requested = request.url;
    console.log(`URL Requested: ${url_requested}`);

    // '/' means that the user was on the home page.
    if (url_requested === '/') {
        // Here we are writing 'Hello world' to the response object.
        response.write("Hello world\n")
    }
    // Our response is finished. Now the server will send that response to the browser.
    response.end()
}
