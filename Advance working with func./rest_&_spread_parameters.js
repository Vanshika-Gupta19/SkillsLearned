//Rest parameter ----> (gathers the list of arguments into array)

function sum(a, b) {
    return a + b;
  }
  
alert( sum(1, 2, 3, 4, 5) );  // 3,i.e, as only two parameters will be taken.





//so, in order to take all the parameters we use ...dot followed by the name of array that contains them
//eg:
function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6



//another eg:

function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
// the rest go into titles array
// i.e. titles = ["Consul", "Imperator"]
showName("Julius", "Caesar", "Consul", "Imperator");





//Spread parameter ----> (expands the array into list of parameters)
alert( Math.max(3, 5, 1) ); // 5

//eg:
let arr = [3, 5, 1];
alert( Math.max(arr) ); //NaN (because Math.max expects a list of numeric arguments, not a single array)

//eg of spread:
let arr1 = [3, 5, 1];
alert( Math.max(...arr1) ); // 5 (spread turns array into a list of arguments)





//Also, the spread syntax can be used to merge arrays:

let arr2 = [3, 5, 1];
let arr3 = [8, 9, 15];

let merged = [0, ...arr2, 2, ...arr3];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr2, then 2, then arr3)



// we can use the spread syntax to turn the string into array of characters:

let str = "Hello";

alert( [...str] ); // H,e,l,l,o

// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o







//copying an array/object ---->
let ar = [1, 2, 3];

let arrCopy = [...ar]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(ar) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(ar === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
array.push(4);
alert(ar); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3
