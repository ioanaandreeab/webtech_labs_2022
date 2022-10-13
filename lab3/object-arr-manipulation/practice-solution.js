const objectsToFilter = [
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
];


const sortField = 'yearOfBirth';

const sortByField = (array, sortField) => {
    return array.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
            return -1;
        } else {
            if (a[sortField] > b[sortField]) {
                return 1;
            } else {
                return 0;
            }
        }
    })
};
console.log(sortByField(objectsToFilter, sortField));