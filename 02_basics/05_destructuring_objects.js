const userObj = {
    objName: "aayush",
    age:20,
    roll:2,
    sem:5
}
// suppose we want to use name of the obj multiple times 
console.log(userObj.objName); // accessing using the obj is lengthy.. so we use

const {objName} = userObj  // now we dont need to write the obj name 
console.log(objName);

// we can also use alias.... a diff short name
const {objName:name} = userObj
console.log(name)