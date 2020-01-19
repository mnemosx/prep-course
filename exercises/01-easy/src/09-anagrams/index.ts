/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function countLetterInString(source: any, letterToFind: string) {
  let count = 0;
  for (let letterIndex in source) {
    let letter = source[letterIndex];
    if (letter == letterToFind) {
      count++;
    }
  }
  return count;
}

function anagrams(stringA: string, stringB: string) {
  let aLower = stringA.toLowerCase();
  let bLower = stringB.toLowerCase();

  let aLetters = aLower.replace(/[^A-Za-z]+/g, "");
  let bLetters = bLower.replace(/[^A-Za-z]+/g, "");

  if (aLetters.length != bLetters.length) {
    return false;
  }

  for (var i = 0; i < aLetters.length; i++) {
    let letter = aLetters[i];
    let aCount = countLetterInString(aLetters, letter);
    let bCount = countLetterInString(bLetters, letter);

    if (aCount != bCount) {
      return false;
    }
  }
  return true;
}

export { anagrams };
