/**
 * Created by johnmcswain on 4/8/17.
 * Purpose: built some reusable math functions
 */


exports.getRandomNumber = function(num1,num2){
    return Math.floor((Math.random() * (num2 - num1)));
}

exports.isPrime = function (num){
    var result = num != 1?true:false;
    if(result){
        for(var i = 2; i < num/2; i++){
            if((num % i) == 0){
                result = false;
                break;
            }
        }
    }
    return result;
}
