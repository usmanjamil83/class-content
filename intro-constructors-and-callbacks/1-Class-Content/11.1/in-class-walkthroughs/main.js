/**
 * Created by johnmcswain on 4/4/17.
 */
/*
function Galaxy (name,starCount,shape){
   this.name = name;
   this.starCount = starCount;
   this.shape = shape;
}

var andromeda = new Galaxy("andromeda",10000000,"ellipse");
var triangulum = new Galaxy("triangulum",100,"doughnut");
var centaurus = new Galaxy("centaurus",20000, "pyramid");

console.log(andromeda.starCount);
console.log(triangulum.shape);
*/

function Tool(name,hasHandle,color,material){
    this.name = name;
    this.hasHandle = hasHandle;
    this.color = color;
    this.material = material;
    this.clean = function(){
        console.log("I am mostly clean");
    }
}

var sawzasaw = new Tool("sawzasaw",true,"grey","plastic");
var wrench = new Tool("wrench",true,"grey","steel");
var drimmel = new Tool("drimmel",true,"brown","iron")
//console.log("%s %s %s", drimmel.material, wrench.color, sawzasaw.name);
//drimmel.clean();


function Language(name,isCompiled){
    this.name = name;
    this.isCompiled = isCompiled;
    this.isPayHigh = function(){
        console.log("maybe");
    }
    this.printStats = function(){
        for (var prop in this){
            console.log(this[prop]);
        }
    }
}

var cSharp = new Language("C#", true);
var fortran = new Language("Fortran", true);
var js = new Language("JS", false);

//javascript.isPayHigh();
/*
for (var prop in cSharp){
    console.log(cSharp[prop]);
}
*/
//js.printStats();


function ClassRoom(name){
    this.name = name;
    this.roster = [];
}

function Programmer(name){
    this.name = name;
}

var student1 = new Programmer("Bill Bixby");
var student2 = new Programmer("Po");
var teacher = new Programmer("Master Shifu");
console.log("%s %s", student1.name, teacher.name);

var obj1 = new Object();
obj1.weight = 200;
obj1.materials = ["iron","copper"];

student1.didHomework = false;
student1.grades = [];
student1.getWild = function (){
    console.log("%s wildin",this.name);
};
student1.getWild();

student2.getWild();




