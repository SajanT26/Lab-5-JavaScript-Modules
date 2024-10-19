export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export default function multiply(a, b) {
    return a * b; 
}

import { toUpperCase } from './stringModule.js';
export function addAndLogUpper(a, b) {
    const result = add(a, b); 
    console.log(toUpperCase(result.toString()));
}

import { findMax } from './arrayModule.js';

export function maxAndMultiplyToUpper(arr, multiplier) {
    const max = findMax(arr);           
    const result = multiply(max, multiplier); 
    console.log(toUpperCase(result.toString()));
}