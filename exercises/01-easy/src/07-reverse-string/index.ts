/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
  let result = "";
  for (let i = str.length; i >= 0; i--) {
    let char = str.charAt(i);
    result += char;
  }
  return result;
}

export { reverse };
