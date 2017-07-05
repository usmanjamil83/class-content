/** ****************************************************************************
 *
 * This exercise will introduce you to one of the most powerful contexts
 *   for prototypes in JavaScripts: object-oriented programming (OOP) With
 *   constructor functions.
 *
 *   There's a lot of text in this file, but don't let that intimidate you.
 *   It's all there to help--you won't be doing as much work as it looks.
 *
 *****************************************************************************/

// The User constructor takes a user's first name; last name; and email, and
//   returns a new object with those properties set appropriately.
var User = function User(firstName, lastName, email) {

  this.firstName = firstName;

  this.lastName = lastName;

  this.email = email;

};

// Let's use it. Create a user named Robert Heinlein, and any email.
var rheinlein = new User("Robert", "Heinlein", "heinlein@navy.gov");

// Now, rheinlein ias an object, just like any other. Every object has a
//   prototype. Your first task is to retrieve rheinlein's prototype.
var rheinleinPrototype = Object.getPrototypeOf(rheinlein);

// You may not have noticed it before, but functions actually have properties
//   in JavaScript. Try logging the length property of your User function.
console.log(User.length);

/** ***************************************************************************
 *
 * BACKGROUND/INSTRUCTIONS:: The Prototype of Instance Objects
 *
 ******************************************************************************

 * A function's length property stores how many arguments
 *   the author defined the function with. The point you need to remember,
 *   though, is this: In JavaScript, any entity with properties is an Object.
 *
 *   Yes...Even functions. Try this:
 *
 *   1. Explain to your partner what the 'call' function does.
 *
 *   2. Explain to your partner what the arguments to call mean.
 *
 *   3. Use call to create a new user, named Mary Wollstonecraft,
 *        with any email. What do you have to create before using call?
 *
 *   4. Log your user's first name.

 *****************************************************************************/

var mwollstonecraft = {};

User.call(mwollstonecraft, "Mary", "Wollstonecraft", "mwolls@gmail.com");

console.log(mwollstonecraft.firstName);

/** ***************************************************************************
 *
 * BACKGROUND/INSTRUCTIONS:: The Prototype of Instance Objects
 *
 ******************************************************************************
 *
 * This isn't as good as just using User--fair enough. But, it demonstrates
 *   one of the most important characteristics of OOP JavaScript.
 *
 *   Take a look at your definition for User. Now, take a look at how you just
 *   instantiated a new user. Explain to your partner, in technical terms, what
 *   User.call is.
 *
 *   ...A property access-right? User is a function; a function is an object;
 *   objects have properties; User.call(...) means, get the call property on
 *   User, and call it as a function.
 *
 *   Thing is, User doesn't have a call method. But, User is an object. And
 *   objects have prototypes. Which means...JavaScript looks for call on User's
 *   prototype chain.
 *
 *   Since our function call worked, we can assume it found it.
 *
 *   Working with a partner, draw a diagram of this prototype chain.
 *
 *   0. First, use the constructor to set mwollstonecraft equal to a new object
 *      with the same parameters. This allows us to say consistent with how we
 *      create users in this activity.:w
 *
 *   1. Use P(User), or your own notation, to denote the prototype of User.
 *
 *   2. Be sure you can explain what happens when we call User.call. Attach
 *      it as a property in the right place.
 ******************************************************************************/

mwollstonecraft = new User("Mary", "Wollstonecraft", "mwolls@gmail.com");


/** ****************************************************************************
 *
 * One possible solution is below.
 *
 _____________________________________________________________________________
 |                                                                            |
 |        Object.getPrototypeOf(User)                                         |
 |   User --------------------------> P(User)                                 |
 |                                |_call                                      |
 |____________________________________________________________________________|

 *****************************************************************************/

/** ***************************************************************************
 *
 * BACKGROUND: The Prototype of Instance Objects
 *
 ******************************************************************************
 *
 * This exercise will introduce you to one of the most powerful contexts
 *   for prototypes in JavaScripts: object-oriented programming (OOP) With
 *   constructor functions.
 *
 * Okay--so func*tions are objects. Like all objects, they have prototypes.
 *   Again, this is absolutely crucial JavaScript. But there's one more piece
 *   of information essential for using it for OOP.
 *
 *   By now, you'll never forget that all objects have prototypes! But we
 *   haven't covered where the prototype object itself comes from. There's
 *   a simple answer for objects created with constructor functions.
 *
 *   Every constructor function has a special property, called prototype,
 *   which is an object. The crucial point is this:
 *
 *     The prototype for every object you create with a constructor function
 *     is the object referenced by the prototype property of the constructor.
 *
 *   That's a bit of a mouthful, and we realize that the word "prototype"
 *   can regfer to a confusing number of things. This mostly won't matter
 *   in practice, but there is one easy mistake to make. Keep in mind that:
 *
 *     Object.getPrototypeOf(User) IS NOT THE SAME AS User.prototype.
 *
 *   These are totally different objects. The first is the prototype that User
 *   delegates to. The second is an object we attach to User for convenience,
 *   so that it's easy to set up the prototype chains for objects you create
 *   with it.
 *
 *   Phew...That was a whirlwind. Let's put all that theory to good use.
 *
 *
 ******************************************************************************
 *
 * INSTRUCTIONS
 *
 ******************************************************************************

 *   FIrst, explain to your partner what the prototype of mwollstonecraft is.
 *   Then, store it in a variable.
 *
 ******************************************************************************
 *
 *
 * This exercise will introduce you to one of the most powerful contexts
 *   for prototypes in JavaScripts: object-oriented programming (OOP) With
 *   constructor functions.
 *
 * Okay--so func*tions are objects. Like all objects, they have prototypes.
 *   Again, this is absolutely crucial JavaScript. But there's one more piece
 *   of information essential for using it for OOP.
 *
 *   By now, you'll never forget that all objects have prototypes! But we
 *   haven't covered where the prototype object itself comes from. There's
 *   a simple answer for objects created with constructor functions.
 *
 *   Every constructor function has a special property, called prototype,
 *   which is an object. The crucial point is this:
 *
 *     The prototype for every object you create with a constructor function
 *     is the object referenced by the prototype property of the constructor.
 *
 *   That's a bit of a mouthful, and we realize that the word "prototype"
 *   can regfer to a confusing number of things. This mostly won't matter
 *   in practice, but there is one easy mistake to make. Keep in mind that:
 *
 *     Object.getPrototypeOf(User) IS NOT THE SAME AS User.prototype.
 *
 *   These are totally different objects. The first is the prototype that User
 *   delegates to. The second is an object we attach to User for convenience,
 *   so that it's easy to set up the prototype chains for objects you create
 *   with it.
 *
 *   Let's put the theory to good use.
 *
 *
 ******************************************************************************
 *
 * INSTRUCTIONS
 *
 ******************************************************************************
 *
 *   First, explain to your partner what the prototype of mwollstonecraft is.
 *   Then, store it in a variable.
 *
 *****************************************************************************/

var rhPrototype = Object.getPrototypeOf(rheinlein);

// Next...Repeat to your partner what the prototype of rheinlein is.
//
//   1. Where is this prototype?
//   2. Find it, and store it in a variable.

var usersPrototype = User.prototype;

// You now have:
//
//   1. An object retrieved from your user instance; and
//   2. An object retrieved from your constructor.
//
// What is true about the relationship between these two objects? Prove your
// response with a log statement.

console.log(usersPrototype === rhPrototype);

/** ****************************************************************************
 *
 * INSTRUCTIONS
 *
 ******************************************************************************
 *
 * You have one more task before you complete this activity. This is the most
 * important practical technique you'll learn in this activity, so be sure you
 * understand it well enough to explain it.
 *
 *   1. First, create a new user. Name them whatever you want.
 *
 *   2. Define a function called isAdmin. It should check if a user has an
 *      admint property. if so, it returns the value of the property. Otherwise,
 *      it returns false. Use the this keyword, and feel free to write a
 *      function that does something more creative, if you want!
 *
 *   3. Where do you put this method such that both rheinlein and your new user
 *      can use it? Explain to your partner, and set things up properly.
 *
 *      Next, call your method on your user objects to demonstrate!
 *
 *   4. FIRST BONUS: scrutinize the fact that you can call this function
 *      from two different objects. Does this mean there are two copies of the
 *      method floating around? Explain to your partner how many copies there
 *      are, and justify your answer.
 *
 *  5. SECOND BONUS: Repeat what you did early in this activity with User.call
 *     to create yet another user to play with. Check if this object's
 *     prototype is equal to User.prototype. Explain your results to your partner.
 *
 *****************************************************************************/

// 1
var ngriffin = new User("Nina", "Griffin", "ngriffin@gmail.com");

// 2 & 3 :: Naive implementation on top.
var isAdmin = function isAdmin() {
  if (!this.admin) {
    return false;
  }
  else {
    return admin;
  }
};

var _isAdmin = function isAdmin() {
  return Boolean(this.admin);
};

User.prototype.isAdmin = isAdmin;

// A little more interesting.
User.prototype.reportIsAdmin = function() {
  if (!isAdmin()) {
    console.log(this.firstName + " " + this.lastName + " is not an admin.");
  }
  else {
    console.log(this.firstName + " " + this.lastName + " is an admin.");
  }
};

// Note that we can call these new methods even though we created them BEFORE
//   updating the prototype. This is a powerful feature of prototypes.
console.log(mwollstonecraft.isAdmin());
console.log(rheinlein.isAdmin());
console.log(ngriffin.isAdmin());

// 4 :: They're defined in one place: On User.prototype: There's only one copy.
//      Feel free to demonstrate this with the other objects to enforce that
//      they're defined only on User.prototype.

Object.keys(User.prototype).forEach((k, v) => console.log(`Prop. name: ${k}`));


// 5. We passed a newly created object literal to User.call(...). That object
//    literal already had a prototype set, the value of which was emphatically
//    not User.prototype.
//
//    Since the user constructor was called as a normal function with a supplied
//    this value, rather than with new, our "constructor" is actually just
//    setting properties--not creating, updating, and returning a new object.

var lpirandello = {};

User.call(lpirandello, "Luigi", "Pirandello", "lpirandello@gmail.com");

console.log(Object.getPrototypeOf(lpirandello) === User.prototype);
