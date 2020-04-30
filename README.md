### Creating a server with Node.js

1. Import the http module using *```require(‘http’)```*
2. Create the server using *`http.createServer(callback_function)`*
    * Your *`callback_function`* should take 2 parameters:  
    *`callback_function(request, response)`*
3. Start the server using *`server.listen(PORT_NUM, callback_function)`*
    * This callback_function is optional. But you can use this to print a message when the server starts.
