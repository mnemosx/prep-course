/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
  let numberSorter = (a: number, b: number) => b - a; // sorts in descending order
  return array.sort(numberSorter)[1];
}

export { secondLargest };
