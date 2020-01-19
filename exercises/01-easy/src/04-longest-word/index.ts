/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
  function cleanUpWord(word: string) {
    return word.replace(/[^a-z]/gi, "");
  }
  let words = sen.split(" ");
  let longestWord = cleanUpWord(words[0]);
  for (let i in words) {
    let word = cleanUpWord(words[i]);
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

export { longestWord };
