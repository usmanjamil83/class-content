/**
 * Created by johnmcswain on 4/8/17.
 */

var myAdmin = require("./WeatherAdmin");

var loginType = process.argv[2];
var userName = process.argv[3];
var loc = process.argv[4];


if (loginType === "admin"){
    myAdmin.getData();
}else{
    myAdmin.getWeatherData(userName,loc); //also storing
}

