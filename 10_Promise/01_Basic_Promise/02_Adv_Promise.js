const obj = {
    name:"aayush",
    age:21,
    gender:"Sigma Male"
}

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(" \n 3RD PROMISE CALLED ");
        resolve(obj)
    },3000)
})

promiseThree.then(function(object){
    console.log(object);
})



///////////////////////////////////////////////
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if(error)
        reject(" ❌❌!! THERE IS ERROR ")
        
        else
        resolve(obj)
    },1000)
})

// resolved function
promiseFour.then(function(my_obj){
    // console.log(`1st resolved o/p \n ${my_obj}`);
    console.log(my_obj);

    return my_obj.gender  // returning gender to next resolve
}).then(function(user_gender){
    console.log(` \n 2nd RESOLVE o/p \n ${user_gender}`);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log(" TOTAL WORK COMPLETED FOR 4TH PROMISE ");
})