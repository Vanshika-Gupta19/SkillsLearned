// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.


//Syntax: setTimeout
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

//eg:
function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John



//another eg:
setTimeout(() => alert('Hello'), 1000); //Hello



//TBR ---->
setTimeout(sayHi(), 1000); //wrong!because setTimeout expects reference to a func. ,so brackets with sayHi won't come.



//to cancel the execution , clearTimeout is used.
let timerId = setTimeout(() => alert("never happens"), 1000); // it returns timerId which is stored in vaiable timerId.


clearTimeout(timerId);  //timer identifier



//SetInterval ---->
//Syntax same as setTimeout

// repeat with the interval of 2 seconds
let timerID = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerID); alert('stop'); }, 5000);




//Nested SetTimeout ---->
let timer = setTimeout(function tick() {
    alert('tick');
    timer = setTimeout(tick, 2000);
  }, 2000);








