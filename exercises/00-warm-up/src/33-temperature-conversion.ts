export {};

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = temp => {
  return (((temp - 32) * 5) / 9).toFixed(1);
};
const celsiusToFahrenheit = temp => {
  return ((temp * 9) / 5 + 32).toFixed(1);
};

console.log(fahrenheitToCelsius(64)); // Expected result: 0
console.log(celsiusToFahrenheit(23)); // Expected result: 32
