/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const ODD_DIGITS = ['1', '3', '5', '7', '9']

function isEven(n: number) {
  let strings = n.toString();

  let indexOfDot = strings.indexOf(".");

  if (indexOfDot > -1) {
    strings = strings.slice(0, indexOfDot);
  }

  let last = strings.charAt(strings.length - 1);
  if (last == "1" || last == "3" || last == "5" || last == "7" || last == "9") {
    return false;
  } else {
    return true;
  }
  
  // -----
  
//   const wholePart = n.toString().split('.')[0]
//   const lastDigit = wholePart.slice(wholePart.length -1)
//   return ODD_DIGITS.indexOf(lastDifit) === -1
}

export { isEven };
