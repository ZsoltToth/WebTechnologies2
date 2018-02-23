/**
 * Loads the lib.js from the current directory.
 * lib.js must be placed next to the current file. 
 */
var lib = require('./lib.js');
/**
 * Use the loaded lib library to perform the calculations. 
 */
console.log(lib.add(5,3));
console.log(lib.sub(5,3));
console.log(lib.mul(5,3));
console.log(lib.div(5,3));
