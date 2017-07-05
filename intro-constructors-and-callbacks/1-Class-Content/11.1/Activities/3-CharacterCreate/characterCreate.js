// constructor function which can take in a series of values and create objects
// with the properties contained inside
function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

  // method which prints all of the stats for a character
  this.printStats = function() {
    for(var prop in this){
      console.log("%s : %s", prop, this[prop]);
    }
  };
  // method which determines whether or not a character's "hitpoints" are less then zero
  // and returns true or false depending upon the outcome
  this.isAlive = function() {
    if (this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has died!");
    return false;
  };

  // method which takes in a second object and decreases their "hitpoints" by this character's strength
  this.attack = function(character2) {
    character2.hitpoints -= this.strength;
  };

  // method which increases this character's stats when called
  this.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
}

// creates two unique characters using the "character" constructor
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);


warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();



var list = [warrior,rogue];
var http = require("http");
var server = http.createServer(function (req,res){
  var result = [];
  for (var i = 0; i < list.length; i++){
    var character = list[i];
    var obj = {};
    for(var prop in character){
       if(!(typeof character[prop] === 'object')){
         obj[prop] = character[prop];
       }
      }
      result.push(obj);
   }
    res.end(JSON.stringify(result));
});
server.listen(3000,function(){
   console.log('3000');
});

