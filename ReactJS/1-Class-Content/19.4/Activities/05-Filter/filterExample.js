/**
 * Created by johnmcswain on 6/8/17.
 */


function isBigEnough(value) {
    return value >= 40;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);