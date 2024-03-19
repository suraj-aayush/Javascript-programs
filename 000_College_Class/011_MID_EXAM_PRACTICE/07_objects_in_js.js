// 1. Object
const obj={
    name:"aayush",
    roll:2,
    sec:"b"
}

const obj1={
    name:"suraj",
    sec:"c",
    dance:"hip hop"
}

const newObj = Object.assign(obj,obj1)
console.log(newObj);
console.log(obj);

// Object.keys()
console.log(Object.keys(obj));

// 2.array
const arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]
arr.sort()
console.log(arr);

// 3. string
const str="hello world"
console.log(str.length);
console.log(str.toUpperCase());

// 4. Maths
const n=3.8
console.log(Math.floor(n));
console.log(Math.ceil(n));

// 5. Date
const date = new Date();
const year = date.getFullYear();
console.log(year); // Output: Current year

const dates = new Date();
console.log(dates.toDateString());
