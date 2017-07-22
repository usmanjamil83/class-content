// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
var PORTS = [{port:8090, func: handleRequestOne}, {port:7501,func:handleRequestTwo}];

PORTS.forEach(function(el){
  makeServer(el.func,el.port);
});
// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("You're a JavaScript mastermind!");
}

function handleRequestTwo(request, response) {
  response.end("You smell.");
}

// =====================================================================

// Create our servers
function makeServer(handler,port) {
    var server = http.createServer(handler);
    server.listen(port, function() {
        // Callback triggered when server is successfully listening. Hurray!
        console.log("Server listening on: http://localhost:%s", port);
    });
}

// =====================================================================