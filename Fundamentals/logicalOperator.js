//There are 4 logical operators in JS: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
//they can be applied to values of any type, not only boolean and their result can also be of any type.

//OR --->
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
//Evaluates operands from left to right.
// a chain of OR || returns the first truthy value or the last one if no truthy value is found.
//eg:
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
//if all values are falsy then "Anonymous" would show up.
//another eg:
true || alert("not printed"); //alert will not run here
false || alert("printed"); //alert will run here



//AND --->
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
//returns true if both operands are truthy and false otherwise.
//eg:
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );         //alert will run here.
}

//another eg:
if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );   //alert will not run here.
  }

//Evaluates operands from left to right.
//returns the first falsy value or the last value if none were found.

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

//precedence of NOT > AND > OR


//NOT --->

// The operator accepts a single argument and does the following:
// Converts the operand to boolean type: true/false.
// Returns the inverse value.
//eg:
alert( !true ); // false
alert( !0 ); // true

// !!(double not)
//the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. so basically we are having value-to-boolean conversion.
//eg:
alert( !!"non-empty string" ); // true
alert( !!null ); // false






