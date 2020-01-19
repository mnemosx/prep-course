/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  // regex checks for given characters (g for global, i for case insensitive)
  let count = s.match(/[aeiou]/gi);
  // if there's no vowels, return null; otherwise return number of vowels
  return count === null ? 0 : count.length;
}

export { vowels };
