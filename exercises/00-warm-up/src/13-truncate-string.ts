export {};

function truncateString(txt: string, by: number) {
  return txt.substring(0, by);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
