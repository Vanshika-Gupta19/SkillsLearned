let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,       // by key "age" store value 30
    "likes birds": true  // multiword property name must be quoted
};
  
//To get properties:
  
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
  
  
//To add properties:
  
user.isAdmin = true;
  
  
//To delete properties:
  
delete user.age;


   
//To access multiword properties we need square brackets[] ---->
  
//Eg:  
let user = {};
  
// set
user["likes birds"] = true;
  
// get
alert(user["likes birds"]); // true
  
// delete
delete user["likes birds"];


    
//Another ways to access properties ---->
  
let user = {
    name: "John",
    age: 30
};
  
let key = prompt("What do you want to know about the user?", "name");
  
//access by variable
alert( user[key] ); // John (if enter "name")
  
//If we access it like :
//let key = "name";
alert( user.key ) // undefined
  
//So, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.




// it can be done:
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"



//Property existence in object: 

//1. Reading a non-existing property just returns undefined.

//Eg:    
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"

//2. Using “in” operator:  syntax: “key” in object.

//Eg:  
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists



//copying the references ---->
//eg:
let user = { name: "John" };
let admin = user; // copy the reference
//therefore, two variables, each storing a reference to the same object.
//When an object variable is copied, the reference is copied, but the object itself is not duplicated.


//Comparison of objects by reference ---->

//Eg: 
//a and b reference the same object, thus they are equal:

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true


//Two independent objects are not equal, even though they look alike (both are empty): 
let x = {};
let y = {}; // two independent objects
alert( x == y ); // false




//Cloning the object ---->

//  copying an object variable creates one more reference to the same object. 
//   But if we need to duplicate an object then  we can create a new object and duplicate the structure of the existing one, by iterating over its properties.
//  Eg:       
let user = {
    name: "John",
    age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}
 
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
alert( user.name ); // still John in the original object
 
//Object.assign method : it copies all the properties of source objects into the target dest. and returns it as a result.
//Used to make real copy(clone).
//Syntax: Object.assign(dest, ...sources)
//Eg: 
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
 
//copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);// now user = {name: "John", canView: true, canEdit: true}
alert(user.canView); // true
alert(user.canEdit); // true

//the call  structuredClone(object) is used to make shallow copy ,i.e, it clones the object with all nested properties.
//Eg: 
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
 
 





  