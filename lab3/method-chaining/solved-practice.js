const sample = 'a short sample text';

// const reverseWords = make a function that reverses the words, but not their order, so that the sample text becomes: 'a trohs elpmas txet'
// console.log(reverseWords(sample)); 
const reverseWords = (input => input.split(' ')
                    .map(word => word.split('').reverse().join(''))
                    .join(' '));
console.log(reverseWords(sample));