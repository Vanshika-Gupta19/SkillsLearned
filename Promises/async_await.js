//async-await always returns a promise.
//syntax: asyncfunction myFunc(){...}
//await pauses the execution of surrounding async function until the promise is settled.

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("newData");
            resolve(200);
        }, 2000);
    });
}

async function getNewData(){
    await api();                      // newData
}


//another eg:
function getData(dataId){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("data" , dataId);
            resolve("success");
        }, 2000);
    });
};

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();
//output:  data1    (after 2sec)
//         data2    (after 2 sec)
//         data3    (after 2 sec)