//  The Function constructor lets you create functions dynamically from strings.
// let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // 5

let double = new Function('n', 'return n * 2');
console.log(double(5)); // 10

//new Function() creates functions that always run in global scope,not where they were defined.
global.a = 10;
function func() {
  let a = 20;
  return new Function('return a;');
}
let f = func();
console.log(f()); //  10

function evaluate(expression) {
    return new Function('return ' + expression)();
}
  
console.log(evaluate("2 + 3 * 4"));    // 14

let prod= new Function ('a','b','return a*b');
console.log(prod(2,3));




  
