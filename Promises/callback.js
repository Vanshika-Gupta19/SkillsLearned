//callback is a function as an argument to another function.

//eg: 
function sum(a,b){    
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);  //3




//another eg:
const hello = () => {
    console.log("hello");
};
setTimeout(hello, 3000);    //hello



//Callback Hell: it is basically nested callbacks.so,it becomes difficult to understand and manage this code 

//eg:
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000); 
}

getData(1,()=>{
    getData(2, ()=>{
        getData(3);   
    });
});

// o/p : data 1 (after 2 sec)
//       data 2 (after 2 sec)
//       data 3






