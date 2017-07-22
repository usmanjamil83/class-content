var http = require("http");

var PORT = 7500;

function handleRequest(request, response){
	response.end("study more");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("http://localhost:"+ PORT);
});