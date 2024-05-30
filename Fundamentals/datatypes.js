// Determine the type of value that can be stored and manipulated using variables.
// JS is dynamically typed means ,can hold values of any data type without req. declaration.
// 8 data types are there : 

// 1. Number : can be int or float.
// Eg: 
let n = 124;

//2. BigInt : can store the large integer outside the safe integer range. 
// Created by applying 'n' to end of integer. 
// Eg: 
let b = 10n

//3. String : must be in quotes. (Single , double , backticks) and it is immutable.
// Backticks allows to embed variables and expression.
//Eg: 
let name = "ally"
alert(`hello , ${name}`)   
alert(`the sum is ${2+2}`)

//4. Boolean: has two values : true or false
                                    
//Eg: 
let isGreater = 4>1;
alert(isGreater); // true

//5. Null: represents the variables having " nothing " ,I.e, null
//Eg: 
let age = null;

//6. Undefined : when value is not assigned to a variable then it is undefined.
//Eg: 
let x;
alert(x);  //output: undefined

//7. Symbols: for unique identifiers.

//8. Objects: non - primitive and it is mutable.
                                    
//Eg: 
const car = {type: "fiat" , model: "500" , color: "white"}

//Using typeof operator we can determine the type of operand.
//Eg: typeof(0) //number

