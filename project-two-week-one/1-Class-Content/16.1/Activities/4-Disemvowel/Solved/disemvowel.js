"use strict";

var disemvowel = function (str){
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/ig, "");
};

module.exports = disemvowel;
