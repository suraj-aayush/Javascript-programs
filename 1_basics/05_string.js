const name = "aayush kumar"
const roll = 2

// OTHER METHOD FOR DECLARATION

const college = new String('Graphic Era')   
console.log(college.toUpperCase())          ////////////////////
console.log(typeof(college));               ////////////////////

console.log("my name is -> " + name + " <- my roll is -> " + roll );        //////////////////

//      ANOTHER METHOD
//  ${} -> inside this , we write 
console.log(`my name is ${name} and my roll number is ${roll}`);            //////////////////

// SOME FUNCTIONS

console.log(college.charAt(2));             ////////////////////

const example = "Graphic-Era"
console.log(example.indexOf('h'));          //////////////////////
console.log(example.charAt(3));             /////////////////////

const newString = example.substring(0,4)  // index 0 to 3....> 0 1 2 3
console.log(newString);

const spaceString = "   Aayush  Kumar   "
console.log(spaceString);

console.log(spaceString.trim());      // trim the extra space from beginning and ending

console.log(example.slice(0,3))
