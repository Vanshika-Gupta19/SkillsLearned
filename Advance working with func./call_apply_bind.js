// call ---->  syntax:      func.call(context, arg1, arg2, ...)

let userdetails = {
    name: "vanshika",
    age: 20,
    printDetails: function(){
        console.log(this.name);
    }
}

userdetails.printDetails();

let userdetails2 = {
    name: "aneri",
    age: 21,
}

//function borrowing

userdetails.printDetails.call(userdetails2);






//What if the function is outside of the object?
let userDetails = {
    name: "vanshika",
    age: 20,
}


let printDetails = function(){
    console.log(this);  // due to 'call' , here 'this' will point to both objects.
}


printDetails.call(userDetails); //function printDetails will be called for userDetails


let userDetails2 = {
    name: "aneri",
    age: 21,
}

printDetails.call(userDetails2); //function printDetails will be called for userDetails2




//another eg: 

function say(phrase) {
    alert(this.name + ': ' + phrase);
  }
  
let user = { name: "John" };
  
// user becomes this, and "Hello" becomes the first argument
say.call( user, "Hello" ,"Bye"); // John: Hello Bye



//apply ----> it is same as call but here we can pass multiple arguments as a list of 'Array'.
//eg:

say.apply(user, ["hello", "Bye"]); //John: Hello Bye





// Bind ----> same as call but here we create copy of our function and invoke it later.
//eg: 
let newfun = say.bind(user, "Hello", "Bye");
newfun(); 




