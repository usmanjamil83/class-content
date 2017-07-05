/**
 * Created by johnmcswain on 4/7/17.
 */


/*
 //Loading external modules review

 var numbers = require('./numbers');
 console.log(numbers.getRandomNumber(8,80));
 console.log(numbers.isPrime(12))
 */



/*
  //Callback Intro
function washCar(callback){
    callback();
}

function maintenanceCarMajor(){
    console.log("car serviced");
}
function carClean(){
    console.log("car is clean");
}
function takeCareOfCar(callback){
    callback();
    washCar(carClean);
}
takeCareOfCar(maintenanceCarMajor);
*/

/*
//Introducing Closures
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function root(f,v){
    f("society")
    function innerFunction(v){
        return v += 3;
    }
    return innerFunction;
}
var result = root(function(str){
    console.log("f"+str);
},9);
result();
*/

/*
//Callbacks and Closures
function logBefore(func,m){
    console.log(m);
    func();
}
function runIf(func,b){
    if(b){
        func();
    }
}
function wrap(func,value){
    function something(){
        return func(value);
    }
    return something;
}
var numbers = require('./numbers');
console.log(wrap(numbers.isPrime,5)()); //invoke the wrap method using ()
*/

