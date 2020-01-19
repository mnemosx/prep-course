export {};

function goThroughNumbers(start, end) {
  let arr = [];
  if (start > end) console.log("invalid input");
  else {
    for (let i = start; i <= end; i++) {
      let odd = i % 2 == 0 ? "even" : "odd";
      arr.push(`> ${i} - ${odd}`);
    }
    console.log(arr);
  }
}

goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'
