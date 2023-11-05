// OBJECTS NESTING

const details={}

details.name="Aayush"
details.id="212313"
details.roll=2

console.log(details);

// nesting
const student = {
    Roll:2,
    sec:'B',
    FullName: {
        FName: "Aayush",
        LName: "Kumar"
    },
    college:"Graphian"

}

console.log(student)
console.log(student.FullName)
console.log('-----------------------------');

const obj1 = { 1:"a", 2:"b", 3:"c"}
const obj2 = { 4:"d", 5:"e", 6:"f" }
const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)  // this is a better technique, {} -> source and others are destination
console.log(obj4);

console.log(" spread obj ---------------------down");
const spreadObj = {...obj1, ...obj2}
console.log(spreadObj);


//  ARRAY OF OBJECTS -------------
console.log(" ARRAY OF OBJECTS --> ");
const user = [
    {
        name:"aman",
        id:200211,
        email:"aman@gmail.com"
    },
    {
        roll2:2323,
        class2 : 'B'
    }
 
]

console.log(user);
console.log(user[0].name);
console.log(user[1].class2);

// GETTING ALL THE KEYS OF AN OBJECT

const keyObj = {
    name:"aman",
    roll:2,
    class:'B',
    phone:934025092
}
console.log("==> KEYS OF AN OBJECT ");  // -> returns an array of all the keys
console.log( Object.keys(keyObj) );

console.log("==> VALUES OF AN OBJECT "); // -> returns an array of all the values ot=f the object 
console.log( Object.values(keyObj) ); 

// TO CHECK IF AN ELEMENT IS PRESENT IN THE OBJECT OR NOT

console.log(keyObj.hasOwnProperty('name'));  // works for keys

