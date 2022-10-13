const objectsToSort = [
    {
        name: 'John',
        hasVisa: true,
        yearOfBirth: 1990
    },
    {
        name: 'Joe',
        hasVisa: false,
        yearOfBirth: 2007
    },
    {
        name: 'Alex',
        hasVisa: false,
        yearOfBirth: 1987
    },
    {
        name: 'Alex',
        hasVisa: true,
        yearOfBirth: 1960
    }
]


const sortField = 'yearOfBirth';

// const sortByField = a function that sorts the provided array by the value of sortingField
// console.log(sortField(objectsToSort, sortField));
const sortByField = (objects) => objects.sort((a, b) => b[sortField] - a[sortField]);

console.log(sortByField(objectsToSort));