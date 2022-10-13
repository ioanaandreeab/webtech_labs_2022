const travelers = [
    {
        name: 'John',
        hasVisa: false
    },
    {
        name: 'Joe',
        hasVisa: true
    },
    {
        name: 'Alex',
        hasVisa: true
    }
];


// const filteredTravelers =  use array filter method to get a list of travelers that have a visa
const filteredTravelers = travelers.filter(traveler => traveler.hasVisa);
console.log(travelers);
console.log(filteredTravelers);