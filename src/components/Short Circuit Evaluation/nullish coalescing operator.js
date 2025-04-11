//! definition of nullish coalescing operator with example.

// The nullish coalescing operator (??) is a JavaScript operator that is used to provide a default value for a variable that may be null or undefined.

// In JavaScript, the following values are considered falsy: false, 0, "" (an empty string), null, undefined, and NaN.

let myValue = 0;
const myNumber = myValue || 10;
const myNumber2 = myValue ?? 10;
console.log("in or operator : ", myNumber);
console.log("in nullish coalescing operator : ", myNumber2);

////////
//! short circuit
//
let expression = null;
let expression2 = 10;
console.log(expression ?? expression2);

//
expression = 10;
expression2 = undefined;
console.log(expression ?? expression2);

//
expression = false;
expression2 = 10;
console.log(expression ?? expression2);

//
expression = 10;
expression2 = false;
console.log(expression ?? expression2);

