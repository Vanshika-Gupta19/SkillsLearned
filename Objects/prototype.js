// Js objects have property called prototype which is either null or references another object. When we try to read property from object and it’s missing then JS automatically takes it from the prototype. 
// We can set prototype by setting “__ proto__”.
// Now, if we want to read property from an object and it is not present there, then JS will take it from prototype.
// Similarly if we have a method in object , it will be called from an object but if it is missing in object and present in prototype then it will be called from prototype.

//Eg:
 let a = {
    name: 'John',
    language: 'Js'
   }
  console.log(a);

 
  let p = {
     run:() => {
     alert('run');
    }
  }

 a.run() //error as it will not recognize this function

 //But if we do: 
             let b = {
                name: 'John',
                language: 'Js'
              }
              console.log(b);

    
              let c = {
                  run:() => {
                  alert('run')
                 }
               }
             b.__proto__ = c; 
             b.run()         // run

//We can also assign a prototype for a prototype:

Eg:    let d = {
                name1: 'John',
                language: 'Js'
              }
              console.log(d);

    
              let pr = {
                  run:() => {
                  alert('run')
                 }
               }
             
             pr.__proto__ = {                          //making pr’s prototype as an object.
                             name: 'jack'
                           }

             d.__proto__ = pr 

             d.run()                 // run

             console.log(d.name)    // jack

