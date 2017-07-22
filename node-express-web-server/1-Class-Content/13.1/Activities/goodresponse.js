var http = require("http");

var PORT = 7000;

function handleRequest(request, response){
	response.end("u did it");

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("http://localhost:"+ PORT);
});