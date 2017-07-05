/**
 * Created by johnmcswain on 4/6/17.
 */

//Parent Constructor
function Parent(fname,surname,address){
    this.fname = fname;
    this.surname = surname;
    this.address = address;
}

//Mensa Constructor
function Mensa(iq){
    this.iq = iq;
}

//Child Constructor
function Child(fname,surname,address,age){
    Parent.call(this,fname,surname,address); //inheritance
    Mensa.call(this,200); //inheritance
    //this.mensa.iq;

    this.age = age;
}



//Prototype properties and methods
Parent.prototype.chargesPending = true;
Mensa.prototype.doMath = function(){
    console.log("do math");
}

//prototypal inheritance
Child.prototype = Object.create(Parent.prototype);//or new Parent();
//Child.prototype = new Mensa();

var homer = new Parent("homer","simpson","who cares");
var bart = new Child("bart","simpson","123 Elm Street",12);
//console.log(homer.chargesPending);
//console.log(bart.chargesPending);
Parent.prototype.isCancelled = false;
//console.log(homer.isCancelled);
//console.log(bart.isCancelled);
Child.prototype.onPunishment = true;
//console.log(homer.onPunishment);
console.log(bart.age);
//console.log(bart.doMath());
//var objPrototype = Object.getPrototypeOf(bart);
//console.log(objPrototype instanceof Parent);
var example = new Object();
var today = Object.prototype.toString.call(new Date());
console.log(Object.getPrototypeOf(example));
console.log("%s",today);





//User constructor
function User(name, email, favLanguage){
    this.name = name;
    this.email = email;
    this.favLanguage = favLanguage;
}

//Programmer constructor
function Programmer(){

}
//Programmer.prototype = Object.create(User.prototype);
User.prototype.dance = function (){
    console.log("dancing");
};

var list = [];
for(var i = 1; i < 4; i++){
    var x = {};
    User.call(x,i,"","something else");
    list.push(x);
   console.log(x instanceof User);
}
console.log(list);
/*
var john = new User("john","123.abc.com","javascript");
var userPrototype = Object.getPrototypeOf(john);
console.log(Object.getOwnPropertyNames(userPrototype));
*/
