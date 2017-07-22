/**
 * Created by johnmcswain on 4/18/17.
 */


var http = require("http");

var PORT1 = 8090;
var PORT2 = 9001;

function handleRequest1(request,response){
    response.end("It Works! Hooray!!! JOY!");
}
function handleRequest2(request,response){
    response.end("It Works again!");
}


var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);
server1.listen(PORT1,function(){
    console.log("server listening on http://localhost:"+PORT1);
});
server2.listen(PORT2,function(){
    console.log("server listening on http://localhost:"+PORT2);
});

