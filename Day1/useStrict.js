// "use strict";

//case 1
// y=3; //erorr : y is not defined
let y=3;
console.log(y); //print 3

//case 2
function sol(){
    console.log(this); //undefined
}
sol();

//case 3 : Duplicate parameter names are banned
// function sol(a,a){}; // error: 


//case 4 : with statement is forbidde   
// with (Math) { // ❌ SyntaxError
//     console.log(sin(90));
// }

//case 5: Creating global object properties from this is blocked
// function fun() {
//     "use strict";
//     this.a = 10; // Cannot set properties of undefined (setting 'a')
//   }
//   fun();


//example
function bar() {
    "use strict";
    return this; 
  }
  console.log(bar()); //undefined
  

  





