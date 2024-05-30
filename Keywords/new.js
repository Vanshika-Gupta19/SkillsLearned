//when we need to create many similar objects,like multiple users etc, we can create them using 'new' keyword.


function User(name) {
    this.name = name; //this.name is basically a variable which is containing name that is passed in the func.
    this.isAdmin = false;      
  }
  
let user = new User("Jack");
  
alert(user.name); // Jack
alert(user.isAdmin); // false

//   When a function is executed with new, it does the following steps:

//   A new empty object is created and assigned to 'this'.
//   The function body executes. Usually it modifies this, adds new properties to it.
//   The value of this is returned.




//internal function of new ---->

function User(name){
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
}




// Return from constructor ---->

//Usually, constructors do not have a return statement. They basically pack all necessary stuff into 'this', and it automatically becomes the result.
//but if there is a return statement then:
// if return is called by object then it returns object instead of this.
// if it is called primitive then ignored and returns this.

//eg: 

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
alert( new BigUser().name );  // Godzilla, got that object



//eg:
function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
 }
  
alert( new SmallUser().name );  //John





//we can add "methods" also to 'this'. it's not necessary to add properties only.
//for eg:

function User(name){
    this.name = name;

    this.sayHi = function(){
      alert( "My name is: " + this.name);
    };
}

let john = new User("John");
john.sayHi(); // My name is: John


