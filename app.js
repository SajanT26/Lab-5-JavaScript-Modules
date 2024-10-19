import { toUpperCase, toLowerCase } from './stringModule.js';
import multiply, { add, subtract } from './mathModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js'; 
import { maxAndMultiplyToUpper } from './mathModule.js';

const numbers = [3, 4, 2, 7, 6];
addAndLogUpper(10, 20);  
maxAndMultiplyToUpper(numbers, 10);

console.log('Add: ', add(5, 3));  
console.log('Subtract: ', subtract(26, 7)); 
console.log('Uppercase: ', toUpperCase('hi')); 
console.log('Lowercase: ', toLowerCase('PROF')); 
console.log('Multiply: ', multiply(4, 5));
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

