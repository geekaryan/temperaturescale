//constant temperature is equal to kelvin
const kelvin = 293;
//this is used to be equal to celsius
const celsius = kelvin - 273;
//converting into fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//decimal number to round figure
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);