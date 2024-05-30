// Variables ---> declared using let , variables and const.
//               must begin with letters , underscore , $
//               Js reserved words can't be used as variables like class , break etc
//               Case sensitive ,I.e., sum and Sum are different.


// Var is globally scoped , therefore can be redeclared and updated.
 
//eg:  
     var x = 10;
     //here x = 10
     
     {
       var x = 2;
        //here x = 2
      }
     //here x = 2;


// Let is block scoped . It can be updated but not redeclared.
 
// Eg: 
    let x = 10;
    // here x = 10
  
    {
     let x = 2;
     // here x = 2
    }
    //here x = 10
 
// Const is block scoped. It can neither be updated nor be redeclared.

// Eg: 
    const pi = 3.141; //correct 
    pi = 3.14; // error
    pi = pi + 1 // error 

// So, to declare an unchanging variable we use const.

// Uppercase constants = we use constants as an alternative name for difficult to remember values which are known before                                 
//                       Execution.
//                       Eg: 
const COLOR_RED = "#F00";
let color = COLOR_CODE; 
// So, for hard coded values we use uppercase with const.
