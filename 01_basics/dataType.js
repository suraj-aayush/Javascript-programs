/* 
7 types

String
Number
Boolean
null
undefined
Symbol
BigInt
*/

const marks = 92;
const decimal = 2.4;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined automatically


const id = Symbol('1231');
const uid = Symbol("1231");

console.log(id == uid );

const biginteger = 1231231231231231

// REFERENCE TYPE ( NON PRIMITIVE )
/*
    array -> typeof(array) = object
    objects -> typeof(objects ) = object
    functions  -> datatype--> typeof(function) = object function
*/

const subjects = ["eng","hindi","maths","phy"];

//objects->
let myObj = {
    name:"aam",
    roll:2,
    sec:'B'
}

console.log(" type of of myObj is ", typeof(myObj))

// functions

const myFunc = function () {
    console.log("hiii");
    
}
// calling the function
myFunc();