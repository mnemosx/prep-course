/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
  var strCounts: { [index: string]: number } = {};
  var maxKey = "";
  for (var i = 0; i < str.length; i++) {
    var key = str[i];
    if (!strCounts[key]) {
      strCounts[key] = 0;
    }
    strCounts[key]++;
    if (maxKey == "" || strCounts[key] > strCounts[maxKey]) {
      maxKey = key;
    }
  }
  return maxKey;
}

export { maxChar };
