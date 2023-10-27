const marvel = ["ironman", "thor", "hulk"]
const dc = ["flash", "superman", "superwoman"]

// marvel.push(dc)  // adds dc array as a single element 
// console.log(marvel)
// console.log(marvel[3][1]);

const newHeroes = marvel.concat(dc)
console.log(newHeroes)  // concatinates all array

// SPREAD OPERATOR
console.log(...marvel, ...dc ,'\n');  // concatinates any number of arrays ...array_name

const ajeebArray = [ 1,2,3,4, [3,5,6,6], [7,8,3,6,[89, 99 ,65 ]] ]
console.log(ajeebArray)

const goodArray = ajeebArray.flat(Infinity)
console.log(`\n our good flat array is ${goodArray}\n`);

console.log(Array.isArray("Hello bro"));
console.log(Array.from("hello_bro"));

console.log(Array.from({name : "aayush"}));   // key value pair.. we need to specify to make array of keys / values 

const n1=100
const n2=200
const n3=300
const n4=400
console.log('new array of numbers is')
console.log(Array.of(n1,n2,n3,n4));


// read more about .. isArray... from.... of