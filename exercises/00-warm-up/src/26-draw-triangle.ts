export {};

function draw(amount) {
  for (let i = 0; i < amount; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
