// TO DEFINE OBJECTS => 

// const obj = {
//                  key : value
//              }


const mySymbol = Symbol("key1")

const JsUser = {
    name:"aman",    // HERE THE KEY IS ASSUMED AS A STRING BY DEFAULT... so we dont write it in "...."
    age:19,
    
    //  mySymbol : "key2"  -> not considered as a symbol here
    [mySymbol] : "key2",  // here to convert it into symbol ->  [mySymbol]:"key2"

    city:"delhi",
    email:"abk@gmail.com",
    weekend:["sat", "sun"]
}

// console.log(JsUser);

// console.log(JsUser.email);  // . dot ke sath .. no "....."
// console.log(JsUser.weekend[1]);

// console.log(JsUser["age"]); // square bracket me we write in quotes.. ["....."]
// console.log(JsUser["name", "age", "email", "city"]);  // prints only first one

// console.log(JsUser["mySymbol"]);
// console.log( typeOf(JsUser.mySymbol) )

// JsUser.email = "abcd@gmail.com"
// console.log(JsUser);

// suppose we want to lock the value of any field.. we use  FREEZE

//Object.freeze(JsUser)

// JsUser.email = "hellobro@microsoft.com"  // cant be changed as it has been freezed
// console.log(JsUser);   // email won't change as the object has been freezed

// for this func to work we need to unfreeze the object , then only we can do this
JsUser.greeting =  function () {
    console.log(` WELCOME USER ${this.name}`);
}

console.log(JsUser.greeting());
