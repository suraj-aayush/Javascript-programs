const arr = [
    {
        name:"aman",
        roll:2,
        school:"bakwaas"
    },
    {
        name:"raam",
        kaam:"kaam-dhaam"
    },
    {
        name:"bahamas",
        city:"laapata"
    }
]

for (const it of arr) {
    console.log(it);
}

////-----------------------------------------------------
console.log('------------------------ 2nd access');
const myArray = [
    {
        name:"aman",
        // roll:2,
        school:"bakwaas"
    },
    {
        name:"raam",
        school:"kaam-dhaam"
    },
    {
        name:"bahamas",
        school:"laapata"
    }
]

myArray.forEach( (item)=>{
    console.log(`name is ${item.name}`);
    console.log(`school is ${item.school}`);
} )