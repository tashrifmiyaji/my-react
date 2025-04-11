//
let expression = true;
let expression2 = "hello";
console.log(expression || expression2);

//
expression = "hello";
expression2 = true;
console.log(expression || expression2);

//
expression = false;
expression2 = "hello";
console.log(expression || expression2);

//
expression = "hello";
expression2 = false;
console.log(expression || expression2);
