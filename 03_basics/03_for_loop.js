const array = [12,"ashd","wqeqwe","aafa",343,9,54]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

console.log("--------------------------------------");
console.log("for each loop");
console.log("--------------------------------------");

array.forEach(element => {
    console.log(element);
});

console.log("--------------------------------------");
console.log("other type");
console.log("--------------------------------------");

for(const val of array)
{
    console.log(val);
}

console.log("--------- EACH CHAR -------------");
const str = "Amitabh Bachhan"

for(const ch of str)
{
    console.log(ch);
}