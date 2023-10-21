const num = 300
const n = new Number(300)  // explicitly it should be a number

console.log( num);
console.log(n);

const digit = n.toString()
console.log(digit);
console.log(typeof(digit));

console.log(n.toFixed(3));  // 300.000  ... fixed number of digits after decimal

const dig = 123.3432
console.log(dig.toPrecision(4));    //.. precise value

///////////+++++++++++++++++++++++++++++++++++////////////// MATHS 

// math is library here.. type is object

console.log(typeof(Math));

console.log(Math.max(99923,-1231, 2, 643))
console.log(Math.min(-231, -42, 0, -546456));

const distance = -6574
console.log(Math.abs(distance));

console.log(Math.ceil(6.1));
console.log(Math.floor(8.5));

console.log(Math.sqrt(625));
console.log(Math.pow());
 
const rand = Math.random()  // generates random values from 0 to 1
console.log(rand);
const roundValue = (Math.round(rand)); // rounding off that value
console.log(Math.round(rand).toFixed(5));  // 5 digits after decimal
console.log(`the random value is ${rand} and its round off is ${roundValue} `);

console.log(Math.floor(rand*10 + 1));

const val = rand* 10 
console.log(`the random value is ${rand} and its x 10 is ${val} and +1 is ${val+1}`); // +1 gives +ve value.. 1 to ....

///////////
console.log(`RANGE ME VALUES LAANA`);
const maxi = 20, mini =10

console.log(rand * (maxi - mini + 1));
console.log( Math.floor(rand * (maxi - mini + 1)) );
const myValue =  Math.floor(rand * (maxi - mini + 1)) + mini 
console.log(myValue);