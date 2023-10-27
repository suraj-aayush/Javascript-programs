const marvel = ["ironman", "thor", "hulk"]
const dc = ["flash", "superman", "superwoman"]

// marvel.push(dc)  // adds dc array as a single element 
// console.log(marvel)
// console.log(marvel[3][1]);

const newHeroes = marvel.concat(dc)
console.log(newHeroes)