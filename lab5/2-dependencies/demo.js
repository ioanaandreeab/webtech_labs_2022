import _ from 'lodash';

const nestedArr = [1, 2, [3, 4], [5, 6, 7, 8]];
console.log(nestedArr);

const flatArr = _.flatten(nestedArr);
console.log(flatArr);

const reversedArr = _.reverse(flatArr);
console.log(reversedArr);

const users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

const user = _.find(users, {lastName: "Doe", gender:"female"});
console.log(user);