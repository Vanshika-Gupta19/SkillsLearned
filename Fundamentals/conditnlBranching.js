// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code. It converts the result into boolean.

//A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”. like the code below will never execute.

if (0) { // 0 is falsy
    
  };


//We can also pass a pre-evaluated boolean value to 'if', like this:
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  
}
// The if statement may contain an optional else block. It executes when the condition is falsy. eg:
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
//if there are several conditions then we use else if. eg:
let yr = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (yr < 2015) {
  alert( 'Too early...' );
} else if (yr > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
//Sometimes, we need to assign a variable depending on a condition. so , we use "conditional operator(?)", 
//it's syntax:
let result = condition ? value1 : value2;
//eg:
let accessAllowed = age > 18 ? true : false;
//but we can do it like this also: let accessAllowed = age > 18;
//as the comparison itself returns true or false.


