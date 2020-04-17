export {};
const stringToArray = (arr) => arr.reduce((arry, el) => el.split(' '), [])
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
