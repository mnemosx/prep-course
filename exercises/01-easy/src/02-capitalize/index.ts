/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
  let array: string[] = str.split(" ");
  let newArray: string[] = [];
  for (let word of array) {
    word = word.charAt(0).toUpperCase() + word.substr(1);
    newArray.push(word);
  }
  return newArray.join(" ");
  
//   return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")
}

export { capitalize };
