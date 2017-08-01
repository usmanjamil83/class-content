var express = require("express");
var bodyParser = require("body-parser");

//create the server
var app = express();
var PORT = 8080;


app.get('/:method/:first/:second', function(req,res){

	var result;
	switch (res.params.method) {
		case addition:
		result = req.params.first + req.params.second;
		break;
		case subtraction:
		result = req.params.first - req.params.second;
		break;
		case multiplication:
		result = req.params.first * req.params.second;
		break;
		case division:
		result = req.params.first / req.params.second;
		break;
		default:
		result = "wrong input";
	}

	res.send(result.toString());

});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});