// const mp = new Map();
// mp.set('a',1)
// mp.set('b',2)

// for( const obj of mp)
// {
//     console.log(`key-value pair is ${obj}`);
//     console.log(`key is -> ${obj[0]}`);
//     console.log(`value is -> ${obj[1]}`);
// }

const mp2 = new Map()
mp2.set("abcd","defg")
mp2.set("hijk","klmn")

//////////////////////////////

// mp2.forEach(element => {
//     console.log(element);
// });

//////////////////////////////

// for (const val in mp2) {
//     console.log(val[0]);
// }

//////////////////////////////

for (const it of mp2) {
    console.log(it);
}