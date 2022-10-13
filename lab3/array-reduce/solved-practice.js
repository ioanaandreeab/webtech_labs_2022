const students = [
    {
        name: 'John',
        money: 100
    },
    {
        name: 'Joe',
        money: 50
    },
    {
        name: 'Alex',
        money: 250
    },
    {
        name: 'Joe',
        money: 300
    }
];

// const totalGroupMoney = use array reduce to calculate how much money the group has, excluding anyone named Joe
// console.log(totalGroupMoney);

const totalGroupMoney = students.reduce((sum, student) => {
    if(student.name !== 'Joe') {
        return sum + student.money;
    } else {
        return sum;
    }
}, 0);

console.log(totalGroupMoney);

const totalMoney = students.filter(student => student.name !== 'Joe')
.reduce((sum, elem) => sum + elem.money, 0);

console.log(totalMoney);