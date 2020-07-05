export {};

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const map = (numbers: number[], func: Function) => {
//   for(let i = 0; i < numbers.length; i++) {
//     numbers[i] = func(numbers[i])
//   }
  
  // or 
  let newArr = []
  numbers.forEach(function(num: number) {
    newArr.push(func(number))
  })
  return newArr
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
