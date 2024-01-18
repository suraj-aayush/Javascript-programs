const fun1 = function(num)
{
    return num*5
}
console.log(fun1(3));
//----------------------------------------------=------------------------------
// DECLARING AND CALLING FUNCTION AT THE SAME TIME
// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSIONS


// first pair of brackets shows that the function is wrapped 
// last pair of brackets show that the function is invoked immedaitely

// this is NAMED IIFE  -> IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
(function chai()
{
    console.log("aayush 2.0");
})();

//-----------------------------------=-------------------
// ARROW FUNCTION

( ()=>{
    console.log("Arrow function ");
}) ()

// WITH ARGUMENT
( (name)=>{
    console.log(` ARROW FUNCTION WITH NAME AS ${name} `);
}) ('aayush3.0')