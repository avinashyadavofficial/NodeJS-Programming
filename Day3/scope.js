// Scope determines where variables are accessible.

//Global scope
// Declared outside of any function or block.
// Accessible anywhere in the code.
let a=10;
function sol(){
    console.log(a); //10
}
sol();
console.log(a); //10

//function Scope
// Variables declared with var inside a function are only accessible inside that function.
function sol1(){
    var b=10;
    console.log(b);
}
// console.log(b);  // error
//block scope
// let and const have block scope — they exist only inside {}.
if (true) {
    let msg = "Hello";
    console.log(msg); 
  }
//   console.log(msg); // error
  

function foo() {
    if (true) {
      var x = 1;
      let y = 2;
      const z = 3;
    }
  
    console.log(x); //  1
    // console.log(y); //  Error
    // console.log(z); //  Error
}
foo();

//Hoisting
//Js moves declarations to the top of their scope during compilation.
console.log(c); //undefined
var c=5;

// console.log(d); //ReferenceError: Cannot access 'd' before initialization 
//bcz let and const are in the Temporal Dead Zone (TDZ) until they’re defined.
let d=5;
  
//example
function sol2(){
    console.log(a); //undefined
    var a=10;
}
sol2();


