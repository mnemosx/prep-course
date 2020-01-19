/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  let splitStr = input
    .replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .split(/[ -]+/);
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase();
  }
  return splitStr.join("");
}

export { parse };
