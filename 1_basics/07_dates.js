const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

//
console.log("\nsecond method\n");
const newDate = new Date(2023,1,14) // here month starts from 0 -> jan, 1 -> feb
console.log(newDate.toLocaleDateString());
console.log(newDate.toDateString());

console.log("\n third method");
const okDate = new Date(2025,6,25, 14 , 55) // here month starts from 0 -> jan, 1 -> feb....  14 , 55 is time
console.log(okDate.toLocaleString());

console.log("\n fourth method");
const diffDate = new Date("2021-02-17")  // here month starts from 1 -> jan, 2->feb.....
console.log(diffDate.toLocaleString());

console.log("\n fifth method"); // 1-> jan,  2-> feb...
const dDate = new Date("1-14-1997")
console.log(dDate.toLocaleString());
console.log(dDate.toDateString());

console.log("\n sixth method");
const fDate = Date.now();
console.log(fDate.toLocaleString());
console.log(dDate.getTime());