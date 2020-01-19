/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number) {
  // split into separate digits
  let digitsAsString = n.toString().split("");
  // find number of digits
  let countDigits = digitsAsString.length;
  // turn back into numbers (maybe should've used parseInt?)
  let realDigits = digitsAsString.map(Number);

  let raised = 0;
  let sum = 0;
  for (let i in realDigits) {
    // Math.pow(x, y) >> x = what to raise; y = to what power
    raised = Math.pow(realDigits[i], countDigits);
    sum += raised;
  }
  if (sum === n) {
    return true;
  } else {
    return false;
  }
}

export { validate };
