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