// while loop ---->
while (condition) {    //if condition is true then code will get executed.
    // code
  }

//eg:
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
//another eg: 
let j = 3;
while (j) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( j );
  j--;
}


//do-while loop ---->
do {       //the loop will first execute then checks the condition if it's true then it will execute again.
    // loop body
  } while (condition);

// for loop ---->
for (begin; condition; step) {
    // ... loop body ...
  }

// "continue" in for loop ---->
//eg:
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }
// so here, For even values of i, the continue directive stops executing the body and passes 
//control to the next iteration of for (with the next number). So the alert is only called for odd values.


//labels for break and continue ---->
//The ordinary break after input would only break the inner loop. so, in order to come out from both the loops we use labels.

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');


  
// For-in loop ----> (loop through keys in object)
//eg:
let animal = {
    name: 'Lion',
    leg: 4
};
for (let key in animal){
    alert(key); //name , leg
    alert(user[key]); // Lion, 4
}

//eg: in arrays ---->
let names = ['rahul', 'neha', 'deep', 'ishika'];
for(let index in names){
    console.log(index);  //0,1,2,3
    console.log(names[index]);  //rahul , neha , deep , ishika
}

// For-of loops -----> (loops through values of an object or array)
for (let elements of names ){
  console.log(names);       //rahul , neha , deep , ishika
}
