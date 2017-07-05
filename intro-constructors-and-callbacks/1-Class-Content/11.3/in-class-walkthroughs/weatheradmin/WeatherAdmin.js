/**
 * Created by johnmcswain on 4/8/17.
 */


var fs = require("fs");
var weather = require("weather-js");

var FILE_NAME = "log.txt";
exports.getWeatherData = function (name,loc){
    weather.find({ search: loc, degreeType: "F" }, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(JSON.stringify(result, null, 2));
        //write to file
        var logTxt = "\nName: " + name + " Location: " + loc + " Date: " + Date.now();
        fs.appendFile(FILE_NAME,logTxt);
    });

};

exports.getData = function(){
    fs.readFile(FILE_NAME,"utf8",function(error,data){
       console.log(data);
    });
};










