//it is for eventual completion of task.
//Syntax: let promise = new Promise((resolve, reject)=>{...})
// resolve and reject are callbacks provided by JS.
// has 3 states: pending ---> result: undefined
//               fullfilled ---> result: resolved
//               rejected ---> result: error

//eg:
let promise = new Promise((resolve, reject) => {
    console.log("it is a promise");
    reject("some error occured");             // [[Promise State]]: "rejected"
})                                            // [[Promise result]]: "some error occured"

// now in order to use promises or access its state and result we have 2 functions:
// .then() ---> used when we want to do something after the promise is fullfilled.
// syntax --> promises.then((result) => {...})

// .catch() ---> used when we want to do something after the promise gets rejected.
//syntax --> promises.catch((err) => {...})

//eg:
const getPromise = () => {
    return new Promise((resolve , reject) => {
        console.log("it is a promise");
        resolve("success");
    });
};

let promise1 = getPromise();
promise1.then(() => {
    console.log("promise fullfilled");
}); 

//output:  it is a promise.
//         promise fullfilled.



//promise chaining:
//eg:
function asyncfunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 2000);
    });
};

function asyncfunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 2000);
    });
};

console.log("fetching data1...");
let p1 = asyncfunc1;
p1.then((res)=>{
    console.log("fetching data2...");
    let p2 = asyncfunc2;
    p2.then((res) => {});
});

//output: 
// fetching data1... 
// data1
// fetching data2...
// data2




//another eg:
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

getData(1).then((res) => {
    return getData(2);
}).then((res) => {         
    console.log(res);
});

//output:  data1
//         data2

