const promiseOne = new Promise(function(resolve, reject){
    // PERFORM ANY ASYNC TASK

    setTimeout(function(){
        console.log(" PROMISE 1 , ASYNC TASK IS DONE");
        resolve(); // ALWAYS EXECUTES AFTER THE ABOVE LOG..>
    },1000);
})
// resolve is directly connected to .then()
promiseOne.then(function(){
    console.log(" 1st ASYNC RESOLVED ");
})

// 2nd METHOD -> DIRECTLY MAKE AND CALL .THEN()

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(" 2ND PROMISE CALLED ");
    resolve();
    },1000)
}).then(function(){
   console.log(" 2ND RESOLVED ");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(" \n 3RD PROMISE ");
        resolve({username:"Aayush", office:"Microsoft"})
    },1000)
})

promiseThree.then(function(object){
    console.log(object);
})