## Skills learned in javascript:

## Fundamentals:
## Datatypes:
-Determine the type of value that can be stored and manipulated using variables.
-JS is dynamically typed means ,can hold values of any data type without req. declaration.
-8 datatypes are there: int , bigInt, string, boolean, undefined, null, symbol, object.
-Using (typeof) operator we can determine the type of operand.
## variables:
- declared using let , variables and const.
-must begin with letters , underscore , $
-Js reserved words can't be used as variables like class , break etc
-Case sensitive ,I.e., sum and Sum are different.
-Var is globally scoped , therefore can be redeclared and updated.
-Let is block scoped . It can be updated but not redeclared.
-Const is block scoped. It can neither be updated nor be redeclared.
## conditional branching:
-The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code. It converts the result into boolean.
## logical operators:
-There are 4 logical operators in JS: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
-they can be applied to values of any type, not only boolean and their result can also be of any type.
## Nullish coalscaeing operator:
-The nullish coalescing operator is written as two question marks ??.
-it treats null and undefined. 
-we’ll say that a value is “defined” when it’s neither null nor undefined.
-The result of a ?? b is:
 -if a is defined, then a,
 -if a isn’t defined, then b.

 ## Advance working with functions:
 ## call/ bind / apply:
 - call ---->  syntax:      func.call(context, arg1, arg2, ...)
 - apply ----> it is same as call but here we can pass multiple arguments as a list of 'Array'.
 - bind ----> same as call but here we create copy of our function and invoke it later.
## Closure:
- closure gives us access to an outer function's scope from an inner function.
-acc. to closure here we have returned the whole function , so it says that not only function is returned but also it's whole scope(lexical scope)is returned.
## rest and spread parameters:
- Rest parameter ----> (gathers the list of arguments into array)
- Spread parameter ----> (expands the array into list of parameters)
## setTimeout and setIntervals:
- setTimeout allows us to run a function once after the interval of time.
- setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
- Syntax: setTimeout
- let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

## Classes:
- blueprint for creating an object with similar properties and methods.

## new keyword:
-when we need to create many similar objects,like multiple users etc, we can create them using 'new' keyword.
-When a function is executed with new, it does the following steps:
-A new empty object is created and assigned to 'this'.
-The function body executes. Usually it modifies this, adds new properties to it.
-The value of this is returned.

## this keyword:
-If we want to refer the current context then we use “this” keyword.

## prototypes:
-Js objects have property called prototype which is either null or references another object. When we try to read property from object and it’s missing then JS automatically takes it from the prototype. 
-We can set prototype by setting “__ proto__”.
-Now, if we want to read property from an object and it is not present there, then JS will take it from prototype.
-Similarly if we have a method in object , it will be called from an object but if it is missing in object and present in prototype then it will be called from prototype.

## promises:
-it is for eventual completion of task.
-Syntax: let promise = new Promise((resolve, reject)=>{...})
-resolve and reject are callbacks provided by JS.
-has 3 states: pending ---> result: undefined
-              fullfilled ---> result: resolved
-              rejected ---> result: error
## using promises:
-in order to use promises or access its state and result we have 2 functions:
- .then() ---> used when we want to do something after the promise is fullfilled.
- syntax --> promises.then((result) => {...})

- .catch() ---> used when we want to do something after the promise gets rejected.
-syntax --> promises.catch((err) => {...})
## Async-await:
-async-await always returns a promise.
-syntax: asyncfunction myFunc(){...}
-await pauses the execution of surrounding async function until the promise is settled.
