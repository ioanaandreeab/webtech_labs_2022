const students = [
    {
        name: 'John',
        yearOfBirth: 1990
    },
    {
        name: 'Joe',
        yearOfBirth: 2007
    },
    {
        name: 'Alex',
        yearOfBirth: 1987
    }
];

const currentYear = 2022;

// const mappedStudents = //use array map to add the age of each adult
// console.log(mappedStudents);

const mappedStudents = students.map(student => {
    const newStud = Object.assign({}, student);
    newStud.age = currentYear - student.yearOfBirth;
    return newStud;
});

const mappedStudentsSpreadOp = students.map(student => ({...student, age: currentYear - student.yearOfBirth}));
console.log(mappedStudentsSpreadOp);

console.log(mappedStudents);
console.log(students);