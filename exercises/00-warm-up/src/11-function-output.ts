export {};

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together with space between them
  // return firstWord + " " + secondWord + " " + thirdWord
  return `${firstWord} un ${secondWord} un vēl ${thirdWord}`;
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
