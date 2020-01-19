export {};

function getNumber() {
  return Math.random() * 100000;
}

const result = getNumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
