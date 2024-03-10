/////////////////////////////  ASYNC AWAIT /////////////////
const url = "https://jsonplaceholder.typicode.com/users";

const new_obj = {
  username: "AK",
  umar: 21,
  aur_sb: " SAB BDHIYA ",
};

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) resolve(new_obj);
    else reject(" !! ERROR. REJECT CALLED ");
  }, 1000);
});

/*

//async await must be written with try catch block

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

///// BASIC API AND JSON

async function getAllUsers(){
    try {
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();  // this parsing also takes time , therefore use await
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers();

*/

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
