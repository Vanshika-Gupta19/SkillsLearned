// this keyword ---->
// If we want to refer the current context then we use “this” keyword.

//eg:
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
user.sayHi(); // John


// TBR: Functions that are stored in object properties are called methods.




//another eg:
let user2 = {
    name: "John",
    age: 30,

    sayHi() {
      alert( user2.name ); // if we use 'User' instead of 'this' then leads to an error
    }
  
  };
  let admin = user2;
user2 = null; // overwrite to make things obvious
  
admin.sayHi(); // TypeError: Cannot read property 'name' of null







// this is not bound: 
//another eg:
let user1 = { name: "John" };
let admin1 = { name: "Admin" };

function sayHi() {
  alert( this.name );
}
// use the same function in two objects
user1.f = sayHi;
admin1.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user1.f(); // John  (this == user1)
admin1.f(); // Admin  (this == admin1)

admin1['f'](); // Admin (dot or square brackets access the method – doesn't matter)





//TBR: About this -----> 
console.log(this); // when we run this in browser then we will get the output that is most global,I.e, window object.
//Because nowadays we have standalone engines in the browser.
//And in vscode we will get {} ,i.e, an empty object






// TBR: 'this' cannot be used inside the function.
function f(){
    let username = 'jack'
    Console.log(this.username);
  }
  f() //undefined  because we can’t use “this” inside the function , we can use it inside the object.
  //so we cannot use 'this' in arrow function as well.




