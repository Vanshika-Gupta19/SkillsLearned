//closure gives us access to an outer function's scope from an inner function.



// Lexical scoping ---->

//eg:
function outer(){
    let username = "Aman"
    function inner(){
        console.log("inner", username);   //Aman
    }
    inner()
}
outer()
console.log("too outer", username); // Error: username undefined.





//another eg:

function outer(){
    let username = "Aman"
    console.log("Outer", secret); //error: secret not defined
    function inner(){
        let secret = "my123";
        console.log("inner", username);   //Aman
    }
    function innerTwo(){
        console.log("innerTwo", username);
        console.log(secret);      //error: secret not defined
    }
    inner()
    innerTwo()
}
outer()
console.log("too outer", username); // Error: username undefined.




// CLOSURE ---->

//eg:

function makeFunc(){
    const name = "Firefox";
    function displayName(){
        console.log(name);
    }
    return displayName;  //acc. to closure here we have returned the whole function , so it says that not only function is returned but also it's whole scope(lexical scope)is returned. means here,along with this displayName function , the const name = "Firefox" will also be returned.
}
const myFunc = makeFunc();
myFunc();         //Firefox






//another eg:
let names = "John";

function sayHi() {
  alert("Hi, " + names);
}

names = "Pete";

sayHi(); // Pete







//another eg:
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
let name = "John";
  
let work = makeWorker();
  
// call it
work();  //Pete







//another eg:
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
let counter = makeCounter();
let counter2 = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
alert( counter2() ); // 0    because counter and counter2 are called by different invocation of makecounter() so, they are independent.
alert( counter2() ); // 1






//filter through function ---->
// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – selects the element that are matching in the given array.
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


