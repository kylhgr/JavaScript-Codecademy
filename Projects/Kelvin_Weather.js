/*The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.

The value saved to kelvin will stay constant. Choose the variable type with this in mind.
*/

const kelvin = 0;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100);
newton = (Math.floor(newton));
fahrenheit = (Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);