export {};

function add(val1, val2) {
  return val1 + val2;
}

function subtract(val1, val2) {
  return val1 - val2;
}

function sum(arr) {
  var total = 0;
  for (let i in arr) {
    total += arr[i];
  }
  return total;
}

function multiply(arr) {
  var total = 1;
  for (var i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
}

function power(val, pwr) {
  let power = 1;
  for (let i = 0; i < pwr; i++) {
    power = power * val;
  }
  return power;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
