var http = require("http");

var PORT = 8080;

function handleRequest(request, response){
	response.end("joy");

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("server listening on http://localhost:"+ PORT);
});