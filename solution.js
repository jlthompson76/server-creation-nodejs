/*
    1. Import the http module and store that in a variable named http
*/

const http = require('http');

/*
    2. Declare a const for PORT and assign it a port number of 4000 
*/

const PORT = 4000;

/*
    3. Create the server using http.createServer(callback) method. 
    You can name your callback function onRequest
*/

let server = http.createServer(onRequest);

/*
    4. Write the onRequest function here. Remember, this function takes in 2 parameters (request, response). This function should handle the following: if the user goes to '/', the function should respond with "Hello World!" message.
    Hint: '/' is the home page
*/

// This function has been rewritten in part 7 below
//
// function onRequest(request, response) {
//     console.log("Hey, I got a request!");
//     const url = request.url;
//     console.log(`The user is on this URL: ${url}`);
//     if (url === '/') {
//         response.write("Hello World!");
//         response.end;
//     }
// }

/*
    5. Start the server by listening on the PORT. 
    Once the server is started, print a message saying that server is running.
*/

server.listen(PORT, onServerStart);

function onServerStart() {
    console.log("The server is running.");
}

/*
    6. Now go back to your onRequest function and add the following:
        6.1. When the user goes to the '/contact' page, the server should respond with the message "This is the contact page."
        6.2. When the user goes to the '/about' page, the server should respond with the message "This is the about page."
        6.3. When the user goes to the '/profile' page, the server should respond with the message "This is your profile page."
        6.4. If user type anything else besides the above, the server should respond with the message "Error: Page not found."
*/ 

function onRequest(request, response) {
    console.log("Hey, I got a request!");
    const url = request.url;
    console.log(`The user is on this URL: ${url}`);
    if (url === '/') {
        response.write("Hello World!");
        response.end;
    }
    else if (url === '/contact') {
        response.write("This is the Contact page.");
        response.end;
    }
    else if (url === '/about') {
        response.write("This is the About page.");
        response.end();
    }
    else if (url === '/profile') {
        response.write("This is your Profile page.");
        response.end;
    }
    else {
        response.write("Error: Page not found.");
        response.end();
    }
}

/*
    7. Write the onRequest function as an arrow function in http.createServer()
*/

server = http.createServer((request, response) => {
    console.log("Hey, I got a request!");
    const url = request.url;
    console.log(`The user is on this URL: ${url}`);
    if (url === '/') {
        response.write("Hello World!");
        response.end;
    }
    else if (url === '/contact') {
        response.write("This is the Contact page.");
        response.end;
    }
    else if (url === '/about') {
        response.write("This is the About page.");
        response.end();
    }
    else if (url === '/profile') {
        response.write("This is your Profile page.");
        response.end;
    }
    else {
        response.write("Error: Page not found.");
        response.end();
    };
})
