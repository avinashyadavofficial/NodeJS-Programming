//Rest parameters let you collect multiple arguments into a single array.
function sum(...numbers) {
    console.log(numbers); // an array
  }
sum(1,4,6,9);  //[ 1, 4, 6, 9 ]

//Only one rest parameter allowed per function.
//It must be the last parameter.

// function log(...args, message) {} // ❌ SyntaxError

