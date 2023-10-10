let score = "93"

console.log(typeof(score));

let intValue = Number(score)
console.log(typeof(intValue));

////////////////////////////////

let val = "22abcd"
let intVal = Number(val) // Number.... String.... Boolean

console.log(typeof(val));
console.log(typeof(intVal));
console.log(intVal);        // NaN......bcuz its not a pure number

///////////////////////////

let s = null
console.log(typeof(s));
