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


// REPLACE FUNCTION

const url = "https://www.aayushkumar%20store.com"
console.log(url.replace('%20','-'))

// if a char or string is present or not -->

console.log(url.includes('kumar'));  // present ... true
console.log(url.includes('singh'));  // not present ... false

// SEPARATOR... separates on basis of a char

const sentence = "The quick brown fox jumps over the dog"
console.log(sentence.split(" "));  // returns an array with all the characters