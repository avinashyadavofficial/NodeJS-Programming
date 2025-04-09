// A polyfill is a piece of code (usually JS) that adds support for a feature that doesn't 
// exist in an older browser or environment.

// Old browsers don't support Array.prototype.includes
if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
      return this.indexOf(value) !== -1;
    };
}
console.log([1,2,3].includes(2));

//Now even in old browsers that don't have includes(), the code still works!

//Transpiller
//A transpiler (like Babel) converts modern JavaScript (ES6+) into older syntax (ES5)
//  that all browsers understand.

//ex:
//modern js
const sum = (a, b) => a + b;

//after transpile
let sum1 = function(a, b) {
  return a + b;
};

// /Transpilers make your code backward-compatible.

/*
Concept	What it does
Polyfill	Adds missing features to older environments
Transpiler	Rewrites new syntax into old-school JS
*/
